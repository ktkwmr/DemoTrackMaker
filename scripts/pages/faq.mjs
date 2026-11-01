// Questions and answers. The answers are HTML; build-pages.mjs also puts a plain-text
// copy in the FAQPage structured data.
import { MAX_TRACKS, MAX_BARS, KBPS } from "./app.mjs";

const EN = [
  { q: "Is Demo Track Maker free?", a: "Yes. It is free, with no sign-up, no account and no ads." },
  { q: "Is my recording uploaded?", a: 'No. Recording, the backing and the mix all run in your browser. Nothing you record is sent anywhere. See the <a href="../privacy/">privacy policy</a>.' },
  { q: "What is it for?", a: 'Sketching song demos, practice backing tracks and arrangement ideas. It is not a full recording studio or DAW; for detailed editing, export WAV or MIDI and continue in a DAW. See <a href="../make-a-demo/">how to make a song demo at home</a>.' },
  { q: "Which chords can I type?", a: 'Major, minor, 7th, maj7, m7, m7b5, dim, dim7, aug, sus2, sus4, 6, m6, add9, 9, 11, 13, tensions such as 7(b9) and slash chords such as C/E. A box turns red if the name is not understood. See <a href="../chord-symbols/">chord symbols</a>.' },
  { q: "How many bars and tracks can I use?", a: `Up to ${MAX_BARS} bars of chords and ${MAX_TRACKS} audio tracks, plus the bass, piano and drum parts.` },
  { q: "Which time signatures are supported?", a: "4/4 and 3/4." },
  { q: "The backing sounds repetitive.", a: 'Turn up Variation, put drum fills at the ends of sections, and try “Another take”. See <a href="../backing-patterns/#alive">making it sound less repetitive</a>.' },
  { q: "My recording is late (or early) compared with the backing.", a: 'Adjust ⚙ → Recording latency, or move the take by dragging its waveform (long-press first) or with ⋯ → Adjust position…. Use wired headphones: Bluetooth adds a delay. See <a href="../recording-tips/#timing">timing and latency</a>.' },
  { q: "The backing is recorded into my vocal.", a: "Use headphones instead of speakers while recording." },
  { q: "Does it work on a phone?", a: "Yes, in a recent browser on iPhone and Android. Allow the microphone when asked, use wired headphones, and keep the screen on while recording." },
  { q: "Where is my project saved?", a: "In your browser, automatically. It comes back when you reopen the page on the same device and browser. To move it to another device or keep a copy, use Export project (.zip) and Open project…." },
  { q: "Which files can I export?", a: `The project as a zip (settings and one WAV per track), the mix as WAV or MP3 (${KBPS.join(" / ")} kbps), each track as WAV, and the backing as a MIDI file with tempo and chord names.` },
  { q: "Can I use the backing in my own songs?", a: "Yes. The patterns and sounds are made by the app, and you may use the backing you make in your own songs and demos." },
  { q: "Does it work offline?", a: "Yes, after the first visit: the app is saved in the browser. MP3 export needs a connection the first time it is used." },
];
const JA = [
  { q: "無料ですか？", a: "はい。無料で、登録・アカウント・広告はありません。" },
  { q: "録音した音はアップロードされますか？", a: '<p>いいえ。録音・伴奏・ミックスはすべてブラウザの中で行い、録った音をどこにも送りません。<a href="../privacy/">プライバシーポリシー</a>もご覧ください。</p>' },
  { q: "何のためのアプリですか？", a: '曲のデモ、練習用の伴奏、アレンジのアイデアを手早く形にするための道具です。録音スタジオや DAW の代わりではありません。細かい編集は WAV や MIDI に書き出して DAW で続けてください。<a href="../make-a-demo/">デモ音源の作り方</a>もご覧ください。' },
  { q: "どんなコードを入力できますか？", a: 'メジャー・マイナー・7th・maj7・m7・m7b5・dim・dim7・aug・sus2・sus4・6・m6・add9・9・11・13、7(b9) のようなテンション、C/E のような分数コード。読めない名前のマスは赤くなります。<a href="../chord-symbols/">コードネームの読み方</a>もご覧ください。' },
  { q: "小節とトラックはいくつまで使えますか？", a: `コードは最大 ${MAX_BARS} 小節、音声トラックは最大 ${MAX_TRACKS} 本です。このほかにベース・ピアノ・ドラムのパートがあります。` },
  { q: "拍子は何に対応していますか？", a: "4/4 と 3/4 です。" },
  { q: "伴奏が単調に聞こえます。", a: 'バリエーションを上げ、区切りにドラムのフィルを入れ、「別の案」も試してください。<a href="../backing-patterns/#alive">単調にしないコツ</a>もご覧ください。' },
  { q: "録音が伴奏より遅れる（早い）です。", a: '⚙ →「録音のずれ補正」で調整するか、波形を長押ししてからドラッグ（または ⋯ →「位置を調整…」）でテイクを動かしてください。Bluetooth のヘッドホンは遅れが出るので、有線のものを使ってください。<a href="../recording-tips/#timing">タイミングと遅れ</a>もご覧ください。' },
  { q: "歌に伴奏の音が入ってしまいます。", a: "録音中はスピーカーではなくヘッドホンで聞いてください。" },
  { q: "スマホで使えますか？", a: "はい。iPhone・Android の新しいブラウザで使えます。マイクの許可を求められたら許可し、有線のヘッドホンを使い、録音中は画面を消さないでください。" },
  { q: "プロジェクトはどこに保存されますか？", a: "ブラウザの中に自動で保存され、同じ端末・同じブラウザで開き直すと続きから使えます。別の端末に移したり控えを残したりするには、「書き出し（.zip）」と「読み込み…」を使ってください。" },
  { q: "どんなファイルを書き出せますか？", a: `プロジェクト（設定とトラックごとの WAV を入れた zip）、ミックス（WAV か MP3、${KBPS.join("・")} kbps）、トラックごとの WAV、伴奏の MIDI（テンポ・コード名入り）です。` },
  { q: "作った伴奏を自分の曲に使ってもいいですか？", a: "はい。パターンと音はアプリが作るもので、作った伴奏はご自身の曲やデモに使えます。" },
  { q: "オフラインで使えますか？", a: "はい。一度開いたあとは、アプリがブラウザに保存されます。MP3 の書き出しだけは、初めて使うときに通信が必要です。" },
];
const dl = (items) => `<dl class="faq">\n${items.map(({ q, a }) => `  <dt>${q}</dt>\n  <dd>${a.startsWith("<p>") ? a : `<p>${a}</p>`}</dd>`).join("\n")}\n</dl>`;

export default {
  slug: "faq",
  faq: true,
  en: {
    title: "Demo Track Maker FAQ: Chords, Recording, Latency, Phones and Export",
    heading: "Frequently asked questions",
    nav: "FAQ",
    description: "Answers about Demo Track Maker: price and privacy, which chords and time signatures it understands, limits, fixing late recordings, using it on a phone, saving and exporting WAV, MP3 and MIDI.",
    faq: EN,
    body: () => dl(EN),
  },
  ja: {
    title: "Demo Track Maker のよくある質問｜コード・録音のずれ・スマホ・書き出し",
    heading: "よくある質問",
    nav: "よくある質問",
    description: "Demo Track Maker についての質問と答え。料金とプライバシー、入力できるコードと拍子、上限、録音のずれの直し方、スマホでの使い方、保存と WAV・MP3・MIDI の書き出し。",
    faq: JA,
    body: () => dl(JA),
  },
};
