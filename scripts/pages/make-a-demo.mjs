// How to make a song demo at home (workflow article)
import { MAX_TRACKS, MAX_KEY, KEY_LABEL } from "./app.mjs";

export default {
  slug: "make-a-demo",
  en: {
    title: "How to Make a Song Demo at Home: From Chords to a Finished Demo",
    heading: "How to make a song demo at home",
    nav: "Making a song demo",
    description:
      "A practical workflow for recording a song demo at home: settle the key, tempo and chords, make a quick backing track, record a guide vocal, add parts, balance the mix, and share it as MP3 or move it to a DAW.",
    body: () => `
<p class="lead">A demo is a recording that lets other people hear your song: the melody, the words, the chords and the feel. It does not have to sound like a finished record. This article shows a simple order of work that keeps a demo quick and useful, using Demo Track Maker as the example.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#why">What a demo is for</a></li>
  <li><a href="#prepare">1. Settle the key, tempo and chords</a></li>
  <li><a href="#backing">2. Make a quick backing track</a></li>
  <li><a href="#guide">3. Record a guide vocal</a></li>
  <li><a href="#parts">4. Add your instrument and harmonies</a></li>
  <li><a href="#mix">5. Balance the mix</a></li>
  <li><a href="#share">6. Share it, or continue in a DAW</a></li>
</ol></nav>

<h2 id="why">What a demo is for</h2>
<p>Decide who will listen before you start. A demo for bandmates needs clear chords and form; a demo for a singer needs the melody and the key they will sing in; a demo you keep for yourself only needs to capture the idea before you forget it. In all three cases, what matters most is that the song is easy to follow — the melody and the words should be clearly audible.</p>

<h2 id="prepare">1. Settle the key, tempo and chords</h2>
<ul>
  <li><b>Key.</b> Sing the highest and lowest notes of the melody. If the highest note strains your voice, move the whole song down (for example from C to A). With a guitar, a capo lets you keep the same shapes in a different key. In the app, <b>${KEY_LABEL.en}</b> moves the whole backing by up to ${MAX_KEY} half steps without retyping the chords — try it before you record.</li>
  <li><b>Tempo.</b> Play the song along with a metronome and find the BPM that feels natural. A demo that is a little slower than you imagine is usually easier to follow than one that rushes.</li>
  <li><b>Chords and form.</b> Write the chords bar by bar, section by section (intro, verse, chorus…). Many pop songs are built from 4- and 8-bar phrases, so it helps to count bars as you write.</li>
</ul>
<p>In Demo Track Maker, type the chords into the chart (one box per beat) or write the whole chart as text, such as <code>| C | Am | F | G |</code>. See <a href="../chord-symbols/">how to read and write chord symbols</a> if a name is unclear.</p>

<h2 id="backing">2. Make a quick backing track</h2>
<p>Choose a pattern for each part that matches the style: steady 8th notes for rock, syncopation for pop, broken chords for a ballad. You do not need the final arrangement yet — the backing only has to show the groove and the chords. <a href="../backing-patterns/">Choosing backing patterns by genre</a> lists combinations to start from.</p>
<p>Repeat the same pattern for a whole song and it starts to sound mechanical. Real players change small things: the bass walks into the next chord, the drummer marks the end of a phrase with a fill. Turn up <b>Variation</b> and put drum fills at the ends of sections (bar 4, bar 8…).</p>

<h2 id="guide">3. Record a guide vocal</h2>
<p>Record the melody first, even if it is rough. It shows where every other part has to leave space. Use headphones so the backing does not leak into the microphone, and turn on the count-in so you know when to start. Sing the whole song through several times rather than fixing one line again and again — a natural take helps listeners more than a perfect one.</p>

<h2 id="parts">4. Add your instrument and harmonies</h2>
<p>Add the parts that make the song yours: an acoustic guitar strumming the chords, a lead line, a harmony vocal. Each one goes on its own track (up to ${MAX_TRACKS} in Demo Track Maker), so you can turn it up, down or off later. If you already recorded the guitar in another app, import the file and line it up by dragging the waveform.</p>
<p>When your own instrument plays the chords, the piano may be too much. Mute it, or switch it to a softer pattern such as whole notes.</p>

<h2 id="mix">5. Balance the mix</h2>
<ol>
  <li>Start with everything at the same level, then bring the vocal up until every word is clear.</li>
  <li>Lower the parts that compete with the vocal (often the piano or a strummed guitar).</li>
  <li>Use pan to spread the instruments a little left and right; keep the vocal, bass and kick drum in the middle.</li>
  <li>Add a little reverb to the vocal so it sits with the backing. Too much reverb pushes it into the distance.</li>
</ol>
<p>Listen on more than one device — headphones, a phone speaker — because that is how other people will hear the demo.</p>

<h2 id="share">6. Share it, or continue in a DAW</h2>
<ul>
  <li><b>To share</b>, use <b>Mixdown…</b> and choose MP3: the file is small enough to send in a chat.</li>
  <li><b>To keep working later</b>, use <b>Export project (.zip)</b>. It holds every take and setting.</li>
  <li><b>To finish in a DAW</b>, export the backing as MIDI (with chord names and tempo) and each recorded track as WAV, then import them. The tracks are aligned to the start of the song, so they line up.</li>
</ul>
`,
  },
  ja: {
    title: "家でできるデモ音源の作り方｜コード決めから録音・ミックス・共有まで",
    heading: "家でできるデモ音源の作り方",
    nav: "デモ音源の作り方",
    description:
      "弾き語りや作曲のデモ音源を家で作る手順。キー・テンポ・コードを決め、伴奏をざっくり作り、仮歌を録り、楽器やハモリを重ね、バランスを整えて MP3 で共有、または DAW で仕上げるまで。",
    body: () => `
<p class="lead">デモ音源は、曲を人に聞いてもらうための録音です。メロディ・歌詞・コード・雰囲気が伝われば十分で、完成品のような音である必要はありません。手早く、伝わるデモを作るための順番を、Demo Track Maker を例に紹介します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#why">デモは何のために作るか</a></li>
  <li><a href="#prepare">1. キー・テンポ・コードを決める</a></li>
  <li><a href="#backing">2. 伴奏をざっくり作る</a></li>
  <li><a href="#guide">3. 仮歌を録る</a></li>
  <li><a href="#parts">4. 楽器やハモリを重ねる</a></li>
  <li><a href="#mix">5. バランスを整える</a></li>
  <li><a href="#share">6. 共有する、または DAW で続ける</a></li>
</ol></nav>

<h2 id="why">デモは何のために作るか</h2>
<p>始める前に、誰に聞かせるかを決めます。バンドのメンバー向けならコードと構成がはっきり、歌い手向けならメロディと歌うキーが分かること、自分用のメモなら忘れないうちにアイデアを残すことが大事です。どの場合も、いちばん大切なのは曲の流れが分かりやすいこと。メロディと歌詞がはっきり聞こえるようにします。</p>

<h2 id="prepare">1. キー・テンポ・コードを決める</h2>
<ul>
  <li><b>キー。</b>メロディのいちばん高い音と低い音を歌ってみます。高い音が苦しければ、曲全体を下げます（例：C から A へ）。ギターならカポを使うと、同じ押さえ方のままキーを変えられます。アプリでは<b>${KEY_LABEL.ja}</b>で、コードを入れ直さずに伴奏全体を半音ずつ最大 ${MAX_KEY} つ上げ下げできます（録音の前に試してください）。</li>
  <li><b>テンポ。</b>メトロノームに合わせて弾き、自然に感じる BPM を探します。デモは、思っているより少しゆっくりめのほうが聞きやすいことが多いです。</li>
  <li><b>コードと構成。</b>イントロ・A メロ・サビのように区切り、小節ごとにコードを書きます。ポップスの多くは 4 小節・8 小節のまとまりでできているので、小節を数えながら書くと整理しやすくなります。</li>
</ul>
<p>Demo Track Maker では、コード譜に 1 拍 1 マスで入力するか、<code>| C | Am | F | G |</code> のようにテキストでまとめて書けます。コードの名前が分からないときは<a href="../chord-symbols/">コードネームの読み方・書き方</a>を見てください。</p>

<h2 id="backing">2. 伴奏をざっくり作る</h2>
<p>曲の雰囲気に合うパターンをパートごとに選びます。ロックなら 8 分の刻み、ポップスならシンコペーション、バラードなら分散和音。この段階で最終的なアレンジは要りません。ノリとコードが分かれば十分です。組み合わせの例は<a href="../backing-patterns/">ジャンル別・伴奏パターンの選び方</a>にまとめています。</p>
<p>同じパターンを曲の最後まで繰り返すと、機械的に聞こえます。人が弾くときは、ベースが次のコードへ駆け上がったり、ドラムがまとまりの終わりでフィルを入れたりと、少しずつ変えています。<b>バリエーション</b>を上げ、区切り（4 小節目・8 小節目など）にドラムのフィルを入れましょう。</p>

<h2 id="guide">3. 仮歌を録る</h2>
<p>粗くてもいいので、先にメロディを録ります。ほかのパートがどこで音を控えるべきかが分かるからです。伴奏がマイクに入らないようヘッドホンを使い、録音前カウントをオンにして入りのタイミングをつかみます。1 行ずつ何度も録り直すより、曲を通して何回か歌うほうが自然なテイクになり、聞く人にも伝わります。</p>

<h2 id="parts">4. 楽器やハモリを重ねる</h2>
<p>アコギのストローク、リードのフレーズ、ハモリなど、その曲らしさを出すパートを重ねます。パートごとに別のトラックに録れば（Demo Track Maker では最大 ${MAX_TRACKS} 本）、あとから大きさを変えたり消したりできます。別のアプリで録ったギターがあれば、ファイルを読み込んで、波形をドラッグして位置を合わせます。</p>
<p>自分の楽器でコードを弾くと、ピアノと重なってうるさく感じることがあります。ピアノをミュートするか、白玉など控えめなパターンに替えましょう。</p>

<h2 id="mix">5. バランスを整える</h2>
<ol>
  <li>まず全部を同じくらいの音量にし、歌詞がすべて聞き取れるまで歌を上げます。</li>
  <li>歌とぶつかるパート（ピアノやストロークのギターが多い）を下げます。</li>
  <li>定位（パン）で楽器を少し左右に広げます。歌・ベース・キックは真ん中に。</li>
  <li>歌にリバーブを少しかけると、伴奏になじみます。かけすぎると遠くで歌っているように聞こえます。</li>
</ol>
<p>ヘッドホンとスマホのスピーカーなど、複数の機器で聞いて確かめます。聞く人はさまざまな環境で再生するからです。</p>

<h2 id="share">6. 共有する、または DAW で続ける</h2>
<ul>
  <li><b>人に送るなら</b>、<b>ミックスダウン…</b>で MP3 を選びます。チャットで送れる大きさになります。</li>
  <li><b>あとで続けるなら</b>、<b>書き出し（.zip）</b>でプロジェクトを保存します。すべてのテイクと設定が入ります。</li>
  <li><b>DAW で仕上げるなら</b>、伴奏を MIDI（コード名とテンポ入り）で、録音したトラックを WAV で書き出して読み込みます。トラックは曲の頭に合わせて書き出されるので、そのまま並びます。</li>
</ul>
`,
  },
};
