// Values shared by the articles and the app, read from the app's own index.html so the articles never
// disagree with it (WEBAPP_BASELINE.md §10-8). The build stops if a value cannot be found.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const html = readFileSync(new URL("../../public/demotrackmaker/index.html", import.meta.url), "utf8");
const fail = (what) => { throw new Error(`scripts/pages/app.mjs: ${what} not found in public/demotrackmaker/index.html`); };
const num = (re, what) => { const m = html.match(re); if (!m) fail(what); return Number(m[1]); };
// The { id, en, ja } entries of a list such as `const BASS_PRESETS = [ ... ];`
function list(name) {
  const start = html.indexOf(`const ${name} = [`);
  if (start < 0) fail(name);
  const end = html.indexOf("\n];", start);
  const block = html.slice(start, end);
  const out = [...block.matchAll(/\{ id: "([^"]+)",(?: beats?: [^,]+,)? en: "([^"]+)", ja: "([^"]+)"/g)].map((m) => ({ id: m[1], en: m[2], ja: m[3] }));
  if (!out.length) fail(name + " entries");
  return out;
}

export const MAX_TRACKS = num(/const MAX_TRACKS = (\d+);/, "MAX_TRACKS");
export const MAX_BARS = num(/const MAX_BARS = (\d+);/, "MAX_BARS");
export const BASS_PRESETS = list("BASS_PRESETS");
export const PIANO_PRESETS = list("PIANO_PRESETS");
export const DRUM_PRESETS = list("DRUM_PRESETS");
export const FILLS = list("FILLS");
export const BASS_TONES = list("BASS_TONES");
export const PIANO_TONES = list("PIANO_TONES");
export const DRUM_TONES = list("DRUM_TONES");
export const FX_PRESETS = list("FX_PRESETS");
export const KBPS = [...html.matchAll(/<option value="(\d+)"(?: selected)?>\d+ kbps<\/option>/g)].map((m) => Number(m[1]));
if (!KBPS.length) fail("MP3 bit rates (#mixKbps)");

// The app's own chord parser, so the chord table in the articles is exactly what the app understands
const pcSrc = html.match(/const PC = \{[^}]+\};/);
const parserSrc = html.match(/function parseChord\(src\) \{[\s\S]*?\n\}\n/);
if (!pcSrc || !parserSrc) fail("parseChord");
const sandbox = {};
vm.runInNewContext(pcSrc[0].replace("const PC", "var PC") + "\n" + parserSrc[0] + "\nthis.parseChord = parseChord;", sandbox);
export const parseChord = sandbox.parseChord;
// Spell each chord tone from its degree (3rd, 5th, 7th, 9th ...), so C9 has Bb (not A#) and Cdim7 has Bbb
const LETTERS = ["C", "D", "E", "F", "G", "A", "B"];
const NATURAL = [0, 2, 4, 5, 7, 9, 11];
const ACC = { "-2": "bb", "-1": "b", 0: "", 1: "#", 2: "##" };
function spell(rootLetter, degree, pc) {
  const li = (rootLetter + degree - 1) % 7;
  let d = (pc - NATURAL[li] + 12) % 12;
  if (d > 6) d -= 12;
  return LETTERS[li] + ACC[d];
}
const DEGREE = { 13: 9, 14: 9, 15: 9, 17: 11, 18: 11, 20: 13, 21: 13 };
// The notes of a chord symbol, from root up (a slash chord's bass note first, marked)
export function chordNotes(symbol) {
  const c = parseChord(symbol);
  if (!c) throw new Error(`scripts/pages/app.mjs: the app does not understand the chord "${symbol}"`);
  const rootLetter = LETTERS.indexOf(symbol[0]);
  const thirdDeg = c.third === 2 ? 2 : c.third === 5 ? 4 : 3;
  const tones = [[1, 0], [thirdDeg, c.third], [5, c.fifth]];
  if (c.sev != null) tones.push([c.sev === 9 && c.fifth === 7 ? 6 : 7, c.sev]);
  for (const e of c.ext) tones.push([DEGREE[e] || 9, e]);
  const notes = tones.map(([deg, iv]) => spell(rootLetter, deg, (c.root + iv) % 12));
  if (c.bass != null) {
    const m = symbol.match(/\/([A-G])/);
    notes.unshift(spell(LETTERS.indexOf(m[1]), 1, c.bass) + " (bass)");
  }
  return notes;
}
