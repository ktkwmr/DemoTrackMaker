#!/usr/bin/env node
// Takes the app screenshots used in the guide articles:
//   public/demotrackmaker/images/guide/{en,ja}-{main,chords,tracks,editor,fx,position,mix,phone}.png
// The "vocal" take is a made-up melody synthesized here (no recording, no copyrighted material);
// everything else is the real app. Re-run it when the app's look changes.
// Requires Playwright and a Chromium browser:
//   npm install --no-save playwright && npx playwright install chromium
// Then:
//   node scripts/render-guide-images.mjs
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium } = await import("playwright").catch(() => import("playwright-core"));
const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));
const OUT = join(PUBLIC, "demotrackmaker/images/guide/");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".md": "text/markdown; charset=utf-8" };
const PATH = { en: "/demotrackmaker/?lang=en", ja: "/demotrackmaker/ja/" };
const BPM = 120, SR = 44100;
const CHART = "| C | Am | F | G |\n| C | Am | F G | C |";
const NAMES = { en: { song: "My Song", vocal: "Vocal" }, ja: { song: "マイソング", vocal: "ボーカル" } };

// Minimal static server for public/ (the app needs http:// for IndexedDB and the Service Worker)
const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = normalize(join(PUBLIC, path));
  if (!file.startsWith(PUBLIC)) return res.writeHead(403).end();
  try {
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" }).end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;

// A made-up vocal line over the chart (MIDI notes, one per beat; 0 = rest), sung as a soft sawtooth with vibrato
const MELODY = [
  64, 64, 67, 0, 69, 67, 64, 0, 65, 64, 62, 0, 62, 64, 67, 0,
  64, 64, 67, 0, 69, 72, 71, 0, 69, 67, 65, 67, 64, 0, 0, 0,
];
function vocalWav() {
  const beat = 60 / BPM, n = Math.ceil(MELODY.length * beat * SR) + SR;
  const x = new Float32Array(n);
  MELODY.forEach((m, k) => {
    if (!m) return;
    const f = 440 * Math.pow(2, (m - 69) / 12), t0 = Math.floor(k * beat * SR), len = Math.floor(beat * 0.92 * SR);
    let ph = 0;
    for (let i = 0; i < len; i++) {
      const t = i / SR, vib = 1 + 0.004 * Math.sin(2 * Math.PI * 5.5 * t);
      ph += (2 * Math.PI * f * vib) / SR;
      const env = Math.min(1, t / 0.04) * Math.min(1, (len - i) / (0.06 * SR));
      x[t0 + i] += 0.28 * env * (Math.sin(ph) + 0.35 * Math.sin(2 * ph) + 0.15 * Math.sin(3 * ph));
    }
  });
  const buf = Buffer.alloc(44 + n * 2);
  buf.write("RIFF", 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write("WAVEfmt ", 8);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22); buf.writeUInt32LE(SR, 24);
  buf.writeUInt32LE(SR * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34); buf.write("data", 36); buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(x[i] * 32767))), 44 + i * 2);
  return buf;
}
const VOCAL = vocalWav();

async function setUp(page, lang) {
  await page.route("https://static.cloudflareinsights.com/**", (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
  await page.goto(origin + PATH[lang]);
  await page.waitForFunction(() => typeof state !== "undefined" && state.song);
  await page.evaluate(async ({ chart, song, vocal }) => {
    state.name = song;
    state.song.chords = textToChords(chart);
    state.song.bars = state.song.chords.length;
    state.song.parts.drums.fills = { 3: "snare1", 7: "tom2" };
    state.tracks[0].name = vocal;
    state.tracks.length = 1;
    songChanged({ rerender: true });
  }, { chart: CHART, song: NAMES[lang].song, vocal: NAMES[lang].vocal });
  // import the made-up vocal into the first track
  await page.evaluate(() => { pendingImportTrack = state.tracks[0]; });
  await page.setInputFiles("#audioFile", { name: "vocal.wav", mimeType: "audio/wav", buffer: VOCAL });
  await page.waitForFunction(() => state.tracks[0].buffer);
  await page.evaluate((v) => { state.tracks[0].name = v; Object.assign(state.tracks[0].fx, defaultFx(FX_PRESETS.find((p) => p.id === "vocal").fx)); renderAll(); }, NAMES[lang].vocal);
  await page.evaluate(() => { transport.pos = 4.5; drawAll(); document.getElementById("toast").classList.remove("show"); });
  await page.addStyleTag({ content: "#toast { display: none !important; } *, *::before, *::after { transition: none !important; caret-color: transparent !important; }" });
  await page.waitForTimeout(300);
}
const shotEl = async (page, sel, file) => { await (await page.$(sel)).screenshot({ path: OUT + file }); console.log("Wrote images/guide/" + file); };

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
for (const lang of ["en", "ja"]) {
  // PC
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 860 }, deviceScaleFactor: 1, serviceWorkers: "block", locale: lang === "ja" ? "ja-JP" : "en-US" });
  const page = await ctx.newPage();
  await setUp(page, lang);
  await page.screenshot({ path: OUT + `${lang}-main.png` }); console.log(`Wrote images/guide/${lang}-main.png`);
  await shotEl(page, "section.song", `${lang}-chords.png`);
  await shotEl(page, "section.tracks", `${lang}-tracks.png`);
  await page.evaluate(() => { ed.scope = "pattern"; ed.grid = 3; openEditor("bass", 3); });
  await page.waitForTimeout(200);
  await page.evaluate(() => { const n = edNotes().find((x) => x.t >= 36); if (n) { ed.sel = n.src; drawEditor(true); } });
  await shotEl(page, "#editDlg", `${lang}-editor.png`);
  await page.evaluate(() => document.getElementById("editDlg").close());
  await page.evaluate(() => openFx({ kind: "track", id: state.tracks[0].id }, document.querySelector(".fxb")));
  await page.waitForTimeout(150);
  await shotEl(page, "#fxDlg", `${lang}-fx.png`);
  await page.evaluate(() => document.getElementById("fxDlg").close());
  await page.evaluate(() => { state.tracks[0].offset = 0.06; transport.pos = 4.5; openPosDialog(state.tracks[0], document.querySelector(".fxb")); });
  await page.waitForTimeout(150);
  await shotEl(page, "#posDlg", `${lang}-position.png`);
  await page.evaluate(() => { document.getElementById("posDlg").close(); state.tracks[0].offset = 0; });
  await page.evaluate(() => openMixDialog(document.getElementById("mixBtn")));
  await page.evaluate(() => { document.querySelector('input[name="mixFmt"][value="mp3"]').checked = true; document.getElementById("mixKbpsRow").hidden = false; });
  await page.waitForTimeout(150);
  await shotEl(page, "#mixDlg", `${lang}-mix.png`);
  await ctx.close();
  // Phone (shown at half size in the articles)
  const pctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: "block", locale: lang === "ja" ? "ja-JP" : "en-US" });
  const phone = await pctx.newPage();
  await setUp(phone, lang);
  await phone.evaluate(() => document.querySelector("section.song").scrollIntoView());
  await phone.waitForTimeout(150);
  await phone.screenshot({ path: OUT + `${lang}-phone.png` }); console.log(`Wrote images/guide/${lang}-phone.png`);
  await pctx.close();
}
await browser.close();
server.close();
