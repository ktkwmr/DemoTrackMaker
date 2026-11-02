// How to read and write chord symbols. The note table is computed with the app's own chord parser
// (scripts/pages/app.mjs → parseChord in index.html), so it shows exactly what the app understands.
import { chordNotes } from "./app.mjs";
import { wideTable } from "./layout.mjs";

// [symbol, English reading, Japanese reading]
const BASIC = [
  ["C", "C major", "C メジャー（シー）"],
  ["Cm", "C minor", "C マイナー"],
  ["C7", "C seventh (dominant 7th)", "C セブンス"],
  ["CM7", "C major seventh (also Cmaj7, C△7)", "C メジャーセブンス（Cmaj7・C△7 とも）"],
  ["Cm7", "C minor seventh", "C マイナーセブンス"],
  ["Cm7b5", "C minor seventh flat five (also Cø)", "C マイナーセブンス・フラットファイブ（Cø とも）"],
  ["Cdim", "C diminished", "C ディミニッシュ"],
  ["Cdim7", "C diminished seventh", "C ディミニッシュセブンス"],
  ["Caug", "C augmented (also C+)", "C オーギュメント（C+ とも）"],
  ["Csus4", "C suspended fourth", "C サスフォー"],
  ["Csus2", "C suspended second", "C サスツー"],
  ["C6", "C sixth", "C シックス"],
  ["Cm6", "C minor sixth", "C マイナーシックス"],
  ["Cadd9", "C add nine", "C アドナインス"],
  ["C9", "C ninth", "C ナインス"],
  ["C7(b9)", "C seventh flat nine", "C セブンス・フラットナインス"],
  ["C/E", "C over E (C with E in the bass)", "C オン E（ベースが E の C）"],
];
// Common chords in two keys, to show the same shapes on other roots
const KEYS = [
  ["C", "Dm", "Em", "F", "G", "Am", "Bm7b5"],
  ["G", "Am", "Bm", "C", "D", "Em", "F#m7b5"],
];
const DEGREES = ["I", "IIm", "IIIm", "IV", "V", "VIm", "VIIm7b5"];

const notes = (s) => chordNotes(s).join(" ");
const basicTable = (lang) => `<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">${lang === "ja" ? "書き方" : "Symbol"}</th><th scope="col">${lang === "ja" ? "読み方" : "Name"}</th><th scope="col">${lang === "ja" ? "構成音" : "Notes"}</th></tr></thead>
    <tbody>
${BASIC.map(([s, en, ja]) => `      <tr><th scope="row"><code>${s}</code></th><td data-label="${lang === "ja" ? "読み方：" : "Name:"}">${lang === "ja" ? ja : en}</td><td data-label="${lang === "ja" ? "構成音：" : "Notes:"}">${notes(s)}</td></tr>`).join("\n")}
    </tbody>
  </table>
</div>`;
const keyTable = (lang) => wideTable(lang, `  <table>
    <thead><tr><th scope="col">${lang === "ja" ? "キー" : "Key"}</th>${DEGREES.map((d) => `<th scope="col">${d}</th>`).join("")}</tr></thead>
    <tbody>
${KEYS.map((row) => `      <tr><th scope="row">${row[0]}</th>${row.map((c) => `<td><b>${c}</b><br><span class="num">${notes(c)}</span></td>`).join("")}</tr>`).join("\n")}
    </tbody>
  </table>`);

export default {
  slug: "chord-symbols",
  en: {
    title: "How to Read and Write Chord Symbols (C, Am7, Cmaj7, sus4, C/E) with Notes",
    heading: "How to read and write chord symbols",
    nav: "Chord symbols",
    description:
      "A short guide to chord symbols: the root, minor, 7th and maj7, m7b5 and dim, sus2/sus4, 6, add9, tensions and slash chords, with the notes of each chord and the common chords in the keys of C and G.",
    body: () => `
<p class="lead">A chord symbol such as <code>Am7</code> tells you which notes sound together. Once you know how the parts of the name work, you can read any chart — and type it into Demo Track Maker, which plays exactly the notes listed below.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#parts">The parts of a chord name</a></li>
  <li><a href="#table">Common chord symbols and their notes</a></li>
  <li><a href="#keys">The chords of a key</a></li>
  <li><a href="#writing">Writing a chart</a></li>
</ol></nav>

<h2 id="parts">The parts of a chord name</h2>
<ul>
  <li><b>Root</b> – the capital letter, with a sharp (#) or flat (b): <code>C</code>, <code>F#</code>, <code>Bb</code>. The chord is built up from this note.</li>
  <li><b>Major or minor</b> – a letter alone is a major chord (root, major 3rd, 5th). <code>m</code> makes it minor (the 3rd is a half step lower). Major chords tend to sound bright, minor chords darker.</li>
  <li><b>7th</b> – <code>7</code> adds the minor 7th (in C: Bb); this is the “dominant seventh” that wants to resolve. <code>M7</code> / <code>maj7</code> / <code>△7</code> adds the major 7th (in C: B) and sounds soft and open.</li>
  <li><b>Changes to the 5th</b> – <code>b5</code> lowers it, <code>aug</code> or <code>+</code> raises it. <code>dim</code> is a minor 3rd with a lowered 5th; <code>m7b5</code> (also <code>ø</code>) adds a minor 7th to that.</li>
  <li><b>sus</b> – the 3rd is replaced by the 4th (<code>sus4</code>) or the 2nd (<code>sus2</code>). sus4 often moves back to the plain chord.</li>
  <li><b>6, add9 and tensions</b> – <code>6</code> adds the 6th, <code>add9</code> adds the 9th without a 7th, <code>9</code> means a 7th chord with the 9th. Altered tensions such as <code>(b9)</code> or <code>(#9)</code> are written in brackets.</li>
  <li><b>Slash chords</b> – <code>C/E</code> is a C chord with E as the lowest (bass) note. It is often used for smooth bass lines.</li>
</ul>

<h2 id="table">Common chord symbols and their notes</h2>
<p>All examples use C as the root. For another root, move every note by the same distance.</p>
${basicTable("en")}
<p class="cap">The notes are computed by the same code that Demo Track Maker uses to read chords. In the app, the bass and the piano's left hand play the root (or the bass note of a slash chord), and the right hand plays the chord in the position closest to the previous one, so it moves smoothly.</p>

<h2 id="keys">The chords of a key</h2>
<p>In a major key, the chords built on each note of the scale follow the same pattern: major on I, IV and V, minor on II, III and VI, and m7b5 on VII. That is why so many songs in C use C, F, G and Am, and the same songs in G use G, C, D and Em.</p>
${keyTable("en")}
<p class="cap">The common chords of the keys of C and G, with their notes.</p>

<h2 id="writing">Writing a chart</h2>
<ul>
  <li>Write one bar between bar lines: <code>| C | Am | F | G |</code>.</li>
  <li>For two chords in a bar, write both: <code>| F G |</code> means F for the first half and G for the second (in 4/4, beats 1 and 3).</li>
  <li>Spell names the usual way: <code>Bb</code> rather than <code>A#</code> in flat keys. Both are understood by the app.</li>
</ul>
<p>Paste a chart like this into <b>Type as text…</b> in the app, and the backing plays it right away.</p>
`,
  },
  ja: {
    title: "コードネームの読み方・書き方一覧｜Am7・Cmaj7・sus4・分数コードの構成音",
    heading: "コードネームの読み方・書き方",
    nav: "コードネームの読み方",
    description:
      "コードネームの読み方と書き方の基本。ルート、マイナー、7th と maj7、m7b5 と dim、sus2/sus4、6、add9、テンション、分数コード（オンコード）を構成音つきの一覧で。C と G のキーでよく使うコードの表も。",
    body: () => `
<p class="lead"><code>Am7</code> のようなコードネームは、どの音を同時に鳴らすかを表しています。名前の各部分の意味が分かれば、どんなコード譜も読めます。Demo Track Maker に入力すると、下の表のとおりの音で伴奏します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#parts">コードネームの各部分</a></li>
  <li><a href="#table">よく使うコードネームと構成音</a></li>
  <li><a href="#keys">キーごとのコード</a></li>
  <li><a href="#writing">コード譜の書き方</a></li>
</ol></nav>

<h2 id="parts">コードネームの各部分</h2>
<ul>
  <li><b>ルート（根音）</b>：最初の大文字。シャープ（#）やフラット（b）が付くこともあります（<code>C</code>・<code>F#</code>・<code>Bb</code>）。この音を土台に和音を積みます。</li>
  <li><b>メジャーとマイナー</b>：アルファベットだけならメジャー（ルート・長 3 度・5 度）。<code>m</code> を付けるとマイナー（3 度が半音低い）です。メジャーは明るく、マイナーは暗めに聞こえます。</li>
  <li><b>セブンス</b>：<code>7</code> は短 7 度（C なら Bb）を足した「ドミナントセブンス」で、次のコードへ進みたがる響きです。<code>M7</code>・<code>maj7</code>・<code>△7</code> は長 7 度（C なら B）を足し、やわらかく広がりのある響きになります。</li>
  <li><b>5 度の変化</b>：<code>b5</code> は 5 度を半音下げ、<code>aug</code>・<code>+</code> は半音上げます。<code>dim</code> は短 3 度と下げた 5 度、<code>m7b5</code>（<code>ø</code> とも）はそれに短 7 度を足したものです。</li>
  <li><b>サス（sus）</b>：3 度の代わりに 4 度（<code>sus4</code>）か 2 度（<code>sus2</code>）を使います。sus4 は元のコードに戻る形でよく使われます。</li>
  <li><b>6・add9・テンション</b>：<code>6</code> は 6 度を足し、<code>add9</code> は 7 度なしで 9 度を足します。<code>9</code> は 7 度の入ったコードに 9 度を足したものです。<code>(b9)</code>・<code>(#9)</code> のような変化させたテンションはかっこで書きます。</li>
  <li><b>分数コード（オンコード）</b>：<code>C/E</code> は、いちばん低い音（ベース）を E にした C のコードです。「C オン E」とも読みます。ベースの動きをなめらかにするのによく使います。</li>
</ul>

<h2 id="table">よく使うコードネームと構成音</h2>
<p>例はすべてルートが C です。ほかのルートでは、すべての音を同じだけずらします。</p>
${basicTable("ja")}
<p class="cap">構成音は、Demo Track Maker がコードを読み取るのと同じプログラムで計算しています。アプリでは、ベースとピアノの左手がルート（分数コードならベースの音）を弾き、右手は前のコードからの動きがいちばん小さい押さえ方で和音を弾きます。</p>

<h2 id="keys">キーごとのコード</h2>
<p>メジャーキーでは、音階の各音の上にできるコードの種類が決まっています。I・IV・V はメジャー、II・III・VI はマイナー、VII は m7b5 です。C のキーの曲で C・F・G・Am がよく出てくるのも、同じ曲を G のキーにすると G・C・D・Em になるのも、このためです。</p>
${keyTable("ja")}
<p class="cap">C と G のキーでよく使うコードと構成音。</p>

<h2 id="writing">コード譜の書き方</h2>
<ul>
  <li>小節線の間に 1 小節ずつ書きます：<code>| C | Am | F | G |</code>。</li>
  <li>1 小節に 2 つのコードがあるときは並べて書きます。<code>| F G |</code> は前半が F、後半が G（4/4 拍子なら 1 拍目と 3 拍目）です。</li>
  <li>フラット系のキーでは <code>A#</code> より <code>Bb</code> のように、ふつうの書き方にします（アプリはどちらも読めます）。</li>
</ul>
<p>このように書いたコード譜をアプリの「<b>テキストで入力…</b>」に貼り付けると、すぐに伴奏が鳴ります。</p>
`,
  },
};
