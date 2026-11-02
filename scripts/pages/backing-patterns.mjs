// Choosing backing patterns by genre. Pattern and sound names are read from the app (scripts/pages/app.mjs),
// so the table always uses the names shown in the app; the build stops if a pattern is renamed or removed.
import { BASS_PRESETS, PIANO_PRESETS, DRUM_PRESETS, BASS_TONES, PIANO_TONES, DRUM_TONES, FILLS, SHUFFLE } from "./app.mjs";

const pick = (list, id, lang) => {
  const x = list.find((p) => p.id === id);
  if (!x) throw new Error(`scripts/pages/backing-patterns.mjs: "${id}" is not in the app`);
  return x[lang];
};
// [genre en, genre ja, bass, bass sound, piano, piano sound, drums, drum kit, Shuffle (0 = off / 1 = on), BPM range]
const GENRES = [
  ["Rock", "ロック", "eighth", "pick", "eighth", "grand", "8beat", "rock", 0, "110–150"],
  ["Pop", "ポップス", "pop", "finger", "push", "grand", "16beat", "standard", 0, "90–130"],
  ["Ballad", "バラード", "whole", "finger", "arp8", "grand", "ballad", "standard", 0, "60–80"],
  ["Acoustic", "アコースティック", "half", "upright", "arp", "grand", "shaker", "brush", 0, "80–110"],
  ["Soul / R&B", "ソウル・R&B", "motown", "mute", "push", "ep", "16beat", "standard", 0, "80–110"],
  ["Hip-hop", "ヒップホップ", "whole", "808", "pad", "ep", "hiphop", "808", 0, "70–95"],
  ["Dance", "ダンス", "octave", "synth", "quarter", "strings", "clap4", "909", 0, "118–130"],
  ["Funk", "ファンク", "octave", "slap", "eighth", "clav", "16beat", "standard", 0, "95–115"],
  ["Shuffle / blues", "シャッフル・ブルース", "walk", "finger", "stride", "organ", "shuffle", "standard", 1, "80–120"],
  ["Jazz", "ジャズ", "walk", "upright", "charleston", "grand", "jazz", "brush", 1, "100–180"],
];
function genreTable(lang) {
  const h = lang === "ja" ? ["ジャンル", "ベース", "ピアノ", "ドラム", SHUFFLE.label.ja, "BPM の目安"] : ["Genre", "Bass", "Piano", "Drums", SHUFFLE.label.en, "Typical BPM"];
  const cell = (i, html) => `<td data-label="${h[i]}${lang === "ja" ? "：" : ":"}">${html}</td>`;
  const rows = GENRES.map(([en, ja, b, bt, p, pt, d, dt, sw, bpm]) =>
    `      <tr><th scope="row">${lang === "ja" ? ja : en}</th>${cell(1, `${pick(BASS_PRESETS, b, lang)} <small>(${pick(BASS_TONES, bt, lang)})</small>`)}${cell(2, `${pick(PIANO_PRESETS, p, lang)} <small>(${pick(PIANO_TONES, pt, lang)})</small>`)}${cell(3, `${pick(DRUM_PRESETS, d, lang)} <small>(${pick(DRUM_TONES, dt, lang)})</small>`)}${cell(4, SHUFFLE.step(sw, lang))}${cell(5, bpm)}</tr>`
  ).join("\n");
  // A card per genre on phones (table.stack), a normal table on wider screens
  return `<div class="table-wrap">
  <table class="text stack">
    <thead><tr>${h.map((x) => `<th scope="col">${x}</th>`).join("")}</tr></thead>
    <tbody>
${rows}
    </tbody>
  </table>
</div>`;
}

export default {
  slug: "backing-patterns",
  en: {
    title: "Backing Track Patterns by Genre: Bass, Piano and Drums for Rock, Pop, Ballad, Funk, Jazz",
    heading: "Choosing backing patterns by genre",
    nav: "Backing patterns by genre",
    description:
      "Which bass, piano and drum patterns fit rock, pop, ballads, acoustic songs, soul, hip-hop, dance, funk, blues and jazz, with a table of combinations for Demo Track Maker and tips to make the backing sound less repetitive.",
    body: () => `
<p class="lead">The style of a song comes mostly from the rhythm section: how the bass, the chords and the drums divide the beat. This article shows which patterns fit which genre, and how to keep a repeated pattern from sounding mechanical.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#how">How the three parts work together</a></li>
  <li><a href="#table">Combinations by genre</a></li>
  <li><a href="#notes">Notes on each genre</a></li>
  <li><a href="#alive">Making it sound less repetitive</a></li>
</ol></nav>

<h2 id="how">How the three parts work together</h2>
<ul>
  <li><b>Drums</b> set the grid: the hi-hat (or ride) shows the smallest note value — 8th notes in an “8-beat”, 16th notes in a “16-beat” — and the snare on beats 2 and 4 is the backbeat most pop and rock is built on.</li>
  <li><b>Bass</b> connects the drums and the chords. It usually plays the root on beat 1 together with the kick drum, and moves to the next chord with passing notes.</li>
  <li><b>Piano (or guitar)</b> fills in the harmony. Busy rhythms (8th notes) push the song forward; long notes (whole notes, broken chords) leave space for the voice.</li>
</ul>
<p>When one part is busy, the others usually play less. A busy 16-beat drum pattern with a busy piano and a busy bass sounds crowded.</p>

<h2 id="table">Combinations by genre</h2>
<p>Starting points in Demo Track Maker: the pattern (and sound, in small type) for each part. Pattern names are the ones in the app.</p>
${genreTable("en")}
<p class="cap">“${SHUFFLE.label.en}” is the app's ${SHUFFLE.label.en} setting: ${SHUFFLE.step(0, "en")} = straight 8ths, ${SHUFFLE.step(1, "en")} = a triplet shuffle. Tempo ranges are rough guides, not rules.</p>

<h2 id="notes">Notes on each genre</h2>
<h3>Rock</h3>
<p>Steady 8th notes in the bass and the piano, with the kick on 1 and 3 and the snare on 2 and 4. For a chorus that lifts, switch the drums to the ride cymbal pattern and add a fill at the end of the verse.</p>
<h3>Pop</h3>
<p>Syncopation — notes that land just before the beat — gives pop its bounce. The piano pattern with anticipation plays the next chord half a beat early; the syncopated bass and a 16-beat or tambourine groove fit with it.</p>
<h3>Ballad</h3>
<p>Leave room for the voice: whole notes in the bass, broken chords in the piano, a soft cross-stick on the snare. The 8th-note arpeggio with a 3-3-2 left hand gives a gentle push without crowding the melody.</p>
<h3>Soul / R&amp;B and funk</h3>
<p>The bass moves more (octaves, fifths and approach notes), and the drums play 16th notes with ghost notes on the snare. An electric piano or a clavinet sound suits these styles.</p>
<h3>Hip-hop and dance</h3>
<p>Electronic kits (808, 909) and synth bass. Dance music usually has a kick on every beat (four on the floor) and a clap on 2 and 4; hip-hop keeps the kick syncopated and leaves space.</p>
<h3>Shuffle, blues and jazz</h3>
<p>These are played with a swung (triplet) feel, so set ${SHUFFLE.label.en} to ${SHUFFLE.step(1, "en")}. A walking bass plays one note per beat, mostly chord tones and scale steps, and often approaches the next chord's root by a half step. In jazz the ride cymbal carries the time and the piano “comps” — short chords in between the melody.</p>

<h2 id="alive">Making it sound less repetitive</h2>
<ul>
  <li><b>Variation.</b> Real players change small things every few bars. Variation adds bass runs and piano anticipations, crashes at the start of phrases and short lead-ins at their ends (4- and 8-bar phrases).</li>
  <li><b>Fills at section ends.</b> Put a fill (${FILLS.slice(0, 3).map((f) => f.en).join(", ")} …) on the last bar before a new section.</li>
  <li><b>Change the pattern between sections.</b> For example a quieter pattern in the verse and a fuller one in the chorus. If a single bar needs something special, edit that bar only.</li>
  <li><b>Feel.</b> A little feel (timing and velocity differences) makes the parts sound played rather than programmed.</li>
</ul>
`,
  },
  ja: {
    title: "ジャンル別・伴奏パターンの選び方｜ロック・ポップス・バラード・ファンク・ジャズのベース・ピアノ・ドラム",
    heading: "ジャンル別・伴奏パターンの選び方",
    nav: "ジャンル別・伴奏パターン",
    description:
      "ロック・ポップス・バラード・アコースティック・ソウル・ヒップホップ・ダンス・ファンク・ブルース・ジャズに合うベース・ピアノ・ドラムのパターンを、Demo Track Maker での組み合わせの表と、伴奏が単調にならないコツとあわせて紹介。",
    body: () => `
<p class="lead">曲のジャンルらしさの多くは、リズム隊（ベース・コード楽器・ドラム）が拍をどう刻むかで決まります。ジャンルごとに合うパターンと、同じパターンの繰り返しが機械的に聞こえないようにするコツを紹介します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#how">3 つのパートの役割</a></li>
  <li><a href="#table">ジャンル別の組み合わせ</a></li>
  <li><a href="#notes">ジャンルごとのポイント</a></li>
  <li><a href="#alive">単調にしないコツ</a></li>
</ol></nav>

<h2 id="how">3 つのパートの役割</h2>
<ul>
  <li><b>ドラム</b>は拍の細かさを決めます。ハイハット（またはライド）がいちばん細かい音符を刻み、「8 ビート」なら 8 分、「16 ビート」なら 16 分です。2・4 拍目のスネア（バックビート）は、ポップスやロックの土台です。</li>
  <li><b>ベース</b>はドラムとコードをつなぎます。多くは 1 拍目でキックと一緒にルートを弾き、経過音で次のコードへ移ります。</li>
  <li><b>ピアノ（やギター）</b>は和音で響きを埋めます。8 分の刻みのように細かいリズムは曲を前に進め、白玉や分散和音のように長い音は歌のためのすき間を作ります。</li>
</ul>
<p>あるパートが細かく動くときは、ほかのパートは控えめにするのがふつうです。16 ビートのドラムに細かいピアノと細かいベースを重ねると、詰め込みすぎに聞こえます。</p>

<h2 id="table">ジャンル別の組み合わせ</h2>
<p>Demo Track Maker で始めるときの目安です。パートごとのパターンと、小さい字で音色を示しています。パターン名はアプリの表示と同じです。</p>
${genreTable("ja")}
<p class="cap">「${SHUFFLE.label.ja}」はアプリの${SHUFFLE.label.ja}の設定です（${SHUFFLE.step(0, "ja")}：まっすぐな 8 分、${SHUFFLE.step(1, "ja")}：3 連のノリ）。BPM は大まかな目安で、決まりではありません。</p>

<h2 id="notes">ジャンルごとのポイント</h2>
<h3>ロック</h3>
<p>ベースとピアノは 8 分で刻み、キックは 1・3 拍目、スネアは 2・4 拍目。サビで盛り上げるなら、ドラムをライドのパターンに替え、A メロの終わりにフィルを入れます。</p>
<h3>ポップス</h3>
<p>拍の少し前に入る音（シンコペーション）が、ポップスの弾む感じを作ります。ピアノの「先取り」は次のコードを半拍早く弾くパターンで、シンコペーションのベースや、16 ビート・タンバリン入りのドラムとよく合います。</p>
<h3>バラード</h3>
<p>歌のためにすき間を残します。ベースは白玉、ピアノは分散和音、スネアはやわらかいクロススティック。左手が 3・3・2 のリズムを刻む「8分アルペジオ」は、メロディを邪魔せずにやさしく前へ進めます。</p>
<h3>ソウル・R&amp;B、ファンク</h3>
<p>ベースがよく動き（オクターブ・5 度・アプローチの音）、ドラムは 16 分でスネアのゴーストノートが入ります。エレピやクラビの音色が合います。</p>
<h3>ヒップホップ、ダンス</h3>
<p>808・909 のような電子ドラムと、シンセのベース。ダンスミュージックはキックが毎拍（4 つ打ち）でクラップが 2・4 拍目、ヒップホップはキックがシンコペーションですき間が多めです。</p>
<h3>シャッフル・ブルース、ジャズ</h3>
<p>3 連のノリで演奏するので、${SHUFFLE.label.ja}を「${SHUFFLE.step(1, "ja")}」にします。ウォーキングベースは 1 拍に 1 音、コードの音や音階の音を弾き、次のコードのルートへ半音で近づくことがよくあります。ジャズではライドシンバルが拍を刻み、ピアノはメロディの合間に短い和音を入れます（コンピング）。</p>

<h2 id="alive">単調にしないコツ</h2>
<ul>
  <li><b>バリエーション。</b>人が弾くときは数小節ごとに少しずつ変えています。バリエーションは、ベースの駆け上がりやピアノの先取りを入れ、4 小節・8 小節のまとまりの頭にクラッシュ、終わりに短いつなぎを入れます。</li>
  <li><b>区切りにフィル。</b>次のまとまりに入る前の小節にフィル（${FILLS.slice(0, 3).map((f) => f.ja).join("・")} など）を入れます。</li>
  <li><b>まとまりごとにパターンを変える。</b>A メロは控えめ、サビは厚めのパターンにするなど。1 小節だけ特別にしたいときは、その小節だけを編集します。</li>
  <li><b>揺らぎ。</b>タイミングと強さに少しばらつきがあると、打ち込みではなく演奏しているように聞こえます。</li>
</ul>
`,
  },
};
