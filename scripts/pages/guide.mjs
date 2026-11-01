// How to use the app. Screenshots: node scripts/render-guide-images.mjs
import { MAX_TRACKS, MAX_BARS, KBPS, BASS_PRESETS, PIANO_PRESETS, DRUM_PRESETS, FILLS, BASS_TONES, PIANO_TONES, DRUM_TONES, FX_PRESETS } from "./app.mjs";
import { img } from "./shots.mjs";

const names = (list, lang) => list.map((x) => x[lang]).join(lang === "ja" ? "・" : ", ");

export default {
  slug: "guide",
  en: {
    title: "How to Use Demo Track Maker: Chords to Backing Track, Then Record on Top",
    heading: "How to use Demo Track Maker",
    nav: "How to use (guide)",
    description:
      "Step-by-step guide to Demo Track Maker: type a chord chart, choose bass, piano and drum patterns and sounds, edit single notes, record vocals or guitar, add effects, and export WAV, MP3, MIDI or the project.",
    body: () => `
<p class="lead">Demo Track Maker turns a chord chart into a small band — bass, piano and drums — and lets you record your voice or instrument on top. This guide walks through every part of the screen.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#quick">Start in three steps</a></li>
  <li><a href="#chords">Typing the chords</a></li>
  <li><a href="#backing">The backing parts</a></li>
  <li><a href="#edit">Editing single notes</a></li>
  <li><a href="#record">Recording</a></li>
  <li><a href="#import">Importing audio and lining it up</a></li>
  <li><a href="#fx">Effects</a></li>
  <li><a href="#timeline">Moving around the timeline</a></li>
  <li><a href="#export">Saving and exporting</a></li>
  <li><a href="#phone">On a phone or tablet</a></li>
</ol></nav>

<h2 id="quick">Start in three steps</h2>
<ol>
  <li><b>Type the chords.</b> One box is one beat. Write <code>C</code> in the first box of a bar, <code>Am</code> in the next bar, and so on.</li>
  <li><b>Press ▶.</b> Bass, piano and drums play the chords. Change the tempo in <b>BPM</b>.</li>
  <li><b>Record.</b> Press <b>R</b> on a track, then <b>●</b>. Use headphones so the backing does not leak into the microphone.</li>
</ol>
<figure class="shot">
  ${img("en", "main", "The whole screen: the transport (play, stop, record, BPM, time signature), the project buttons, the chord chart with eight bars, and the timeline with the bass, piano and drum parts.")}
  <figcaption>The whole screen on a computer. Tap the image to enlarge it.</figcaption>
</figure>

<h2 id="chords">Typing the chords</h2>
<figure class="shot">
  ${img("en", "chords", "The Chords and backing panel: switches for the backing, the number of bars, swing, feel, variation, another take, ending, type as text, and eight bars of chords with a fill menu on bars 4 and 8.")}
  <figcaption>The chord chart. Each bar has one box per beat and a drum-fill menu.</figcaption>
</figure>
<ul>
  <li><b>One box per beat.</b> An empty box keeps the previous chord, so a bar with only <code>C</code> in the first box plays C for the whole bar. Two chords in a bar: write the second one where it starts (for example <code>F</code> on beat 1 and <code>G</code> on beat 3).</li>
  <li><b>Chord names.</b> Major, minor, 7th, maj7, m7, m7b5, dim, aug, sus2/sus4, 6, add9, 9 and tensions such as <code>7(b9)</code>, and slash chords such as <code>C/E</code>. A box turns red if the name is not understood. See <a href="../chord-symbols/">how to read and write chord symbols</a>.</li>
  <li><b>Bars.</b> Add or remove bars with − / + (up to ${MAX_BARS}). Drag a bar to move it (on a touch screen, long-press it first). Its chords, fill and note edits move with it.</li>
  <li><b>Type as text…</b> Write a whole chart at once, such as <code>| C | Am | F G | C |</code>.</li>
  <li><b>Time signature.</b> 4/4 or 3/4, next to BPM.</li>
</ul>

<h2 id="backing">The backing parts</h2>
<figure class="shot">
  ${img("en", "tracks", "The timeline: the chord row, then the bass, piano and drum parts with a pattern menu, a sound menu, volume and pan, and below them a vocal track with its waveform.")}
  <figcaption>Each part has a pattern, a sound, volume and pan. Shaded bars on the drum row are fills.</figcaption>
</figure>
<ul>
  <li><b>Pattern</b> – how the part plays. Bass: ${names(BASS_PRESETS, "en")}. Piano: ${names(PIANO_PRESETS, "en")}. Drums: ${names(DRUM_PRESETS, "en")}. See <a href="../backing-patterns/">choosing backing patterns by genre</a>.</li>
  <li><b>Sound</b> – Bass: ${names(BASS_TONES, "en")}. Piano: ${names(PIANO_TONES, "en")}. Drum kits: ${names(DRUM_TONES, "en")}. All sounds are synthesized in the browser.</li>
  <li><b>Fills</b> – choose a fill for any bar in the chord chart: ${names(FILLS, "en")}. After a fill the drummer hits a crash cymbal (switch it off in the drum menu ⋯).</li>
  <li><b>Variation</b> – makes the band play like people do: the bass runs into the next chord, the piano anticipates chord changes and adds colour notes, the drums add crashes, open hi-hats and short lead-ins at the end of 4- and 8-bar phrases. <b>Another take</b> picks a different set. 0 plays the plain pattern.</li>
  <li><b>Swing</b> delays the off-beat 8th notes (up to a triplet shuffle). <b>Feel</b> adds small differences in timing and strength. <b>Ending</b> stops the band on the first beat of the last bar.</li>
  <li><b>Backing on / off</b> – when it is off, the three parts are greyed out and silent.</li>
</ul>

<h2 id="edit">Editing single notes</h2>
<figure class="shot">
  ${img("en", "editor", "The note editor for the bass: the scope switch (Whole pattern or This bar only), the grid, a piano-roll with the chord tones shaded, one selected note, and buttons to move it, change its pitch and length, its velocity, or delete it.")}
  <figcaption>The note editor. Rows with the notes of the current chord are shaded.</figcaption>
</figure>
<p>Press <b>Edit</b> on a part (or double-tap its row, or <b>Edit</b> on a bar of the chart). Tap an empty cell to add a note, tap a note to select it, then move it, change its pitch, length or velocity, or delete it. On the drums, tapping a selected hit cycles accent → ghost → off.</p>
<ul>
  <li><b>Whole pattern</b> changes every bar. Pitches are stored relative to the chord (“the 3rd”), so they follow the chords.</li>
  <li><b>This bar only</b> changes one bar and keeps the exact notes, including the automatic variation you hear. Edited bars get a red mark on the timeline.</li>
  <li><b>Undo edit</b> takes back the last changes; <b>Reset pattern</b> / <b>Back to automatic</b> start over.</li>
</ul>

<h2 id="record">Recording</h2>
<ol>
  <li>Press <b>R</b> on an audio track. The browser asks for the microphone the first time. The <b>Input</b> meter shows the level.</li>
  <li>Press <b>●</b>. With <b>Count-in</b> on, one bar of clicks plays first. <b>Click</b> plays a metronome during recording and playback.</li>
  <li>Press <b>■</b> to stop (■ always goes back to the start). Recording again on the same track replaces only the recorded range. <b>Undo</b> brings back the previous take.</li>
</ol>
<div class="note"><p>Use headphones. With speakers, the backing goes into the microphone. If takes sound late or early compared with the backing, adjust ⚙ → <b>Recording latency</b>. Up to ${MAX_TRACKS} audio tracks. More tips: <a href="../recording-tips/">recording vocals and guitar at home</a>.</p></div>

<h2 id="import">Importing audio and lining it up</h2>
<p>⋯ → <b>Import audio file…</b> puts an audio file (WAV, MP3, M4A and others your browser can play) on a track. To move a take, long-press its waveform and drag (on a computer, Alt + drag works right away; hold Shift to snap to 16th notes). For small steps, use ⋯ → <b>Adjust position…</b>:</p>
<figure class="shot">
  ${img("en", "position", "The position dialog: the start is +60 ms, buttons for minus and plus one bar, one beat, 10 ms and 1 ms, a box for the offset in milliseconds, Back to 0, and a button to loop bar 3.")}
  <figcaption>Move a take by 1 ms, 10 ms, a beat or a bar while looping one bar.</figcaption>
</figure>

<h2 id="fx">Effects</h2>
<figure class="shot">
  ${img("en", "fx", "The effects dialog for the vocal track with the Vocal preset: EQ (low, mid, mid frequency, high), compressor, drive, reverb and delay sends, and the shared reverb length and delay time and repeats.")}
  <figcaption>Effects for one track. The reverb and the delay are shared by all tracks.</figcaption>
</figure>
<p><b>FX</b> on every track and part opens its effects: EQ, compressor, drive, and how much goes to the shared reverb and the tempo-synced delay. Presets: ${names(FX_PRESETS, "en")}. Double-click a slider to reset it. The master has a limiter, so the mix does not clip.</p>

<h2 id="timeline">Moving around the timeline</h2>
<p>Tap the timeline to move the playhead. Pinch (or Ctrl + wheel, or − / +) to zoom, drag or scroll sideways to move along. During playback the view follows the playhead. <b>Whole song</b> shows everything again.</p>

<h2 id="export">Saving and exporting</h2>
<figure class="shot">
  ${img("en", "mix", "The mixdown dialog: WAV (uncompressed, best quality) or MP3 (small files for sharing), with the MP3 quality set to 192 kbps.")}
  <figcaption>Choose WAV or MP3 for the mixdown.</figcaption>
</figure>
<ul>
  <li><b>Your work is saved in the browser automatically</b> and comes back when you reopen the page. <b>Clear all</b> starts over.</li>
  <li><b>Export project (.zip)</b> – the settings (<code>project.json</code>) and one WAV per track. <b>Open project…</b> loads it again, on any device.</li>
  <li><b>Mixdown…</b> – the whole song as WAV (16-bit stereo) or MP3 (${KBPS.join(" / ")} kbps).</li>
  <li><b>Backing as MIDI</b> – bass, piano and drums as a MIDI file with tempo, time signature and chord names, to finish the arrangement in a DAW.</li>
  <li><b>Backing → audio track</b> – renders the backing (or ⋯ on one part) into an audio track.</li>
</ul>
<p>When exporting you choose the file name; it starts as the project name.</p>

<h2 id="phone">On a phone or tablet</h2>
<figure class="shot phone">
  ${img("en", "phone", "The app on a phone: the chord chart shows two bars per row, and the timeline with the bass part below it.", { half: true })}
  <figcaption>On a phone the chart shows two bars per row. Scroll down for the timeline.</figcaption>
</figure>
<p>Everything works on a phone too. Use wired headphones when recording (Bluetooth headphones add a delay that is hard to correct). Keep the screen on while recording.</p>
`,
  },
  ja: {
    title: "Demo Track Maker の使い方｜コードから伴奏を作り、歌や楽器を重ねて録音",
    heading: "Demo Track Maker の使い方",
    nav: "使い方ガイド",
    description:
      "Demo Track Maker の使い方を順に説明します。コード譜の入力、ベース・ピアノ・ドラムのパターンと音色の選び方、1 音ずつの編集、歌やギターの録音、エフェクト、WAV・MP3・MIDI・プロジェクトの書き出し。",
    body: () => `
<p class="lead">Demo Track Maker は、コード譜から小さなバンド（ベース・ピアノ・ドラム）の伴奏を作り、その上に歌や楽器を重ねて録音できるアプリです。画面の各部分の使い方を説明します。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#quick">3 ステップで始める</a></li>
  <li><a href="#chords">コードの入力</a></li>
  <li><a href="#backing">伴奏のパート</a></li>
  <li><a href="#edit">1 音ずつの編集</a></li>
  <li><a href="#record">録音</a></li>
  <li><a href="#import">音声ファイルの読み込みと位置合わせ</a></li>
  <li><a href="#fx">エフェクト</a></li>
  <li><a href="#timeline">タイムラインの操作</a></li>
  <li><a href="#export">保存と書き出し</a></li>
  <li><a href="#phone">スマホ・タブレットで使う</a></li>
</ol></nav>

<h2 id="quick">3 ステップで始める</h2>
<ol>
  <li><b>コードを入力する。</b>1 マスが 1 拍です。小節の最初のマスに <code>C</code>、次の小節に <code>Am</code> のように書きます。</li>
  <li><b>▶ を押す。</b>ベース・ピアノ・ドラムがコードに合わせて鳴ります。テンポは <b>BPM</b> で変えます。</li>
  <li><b>録音する。</b>トラックの <b>R</b> を押してから <b>●</b>。伴奏がマイクに入らないよう、ヘッドホンを使ってください。</li>
</ol>
<figure class="shot">
  ${img("ja", "main", "画面全体：上に再生・停止・録音・BPM・拍子、その下にプロジェクトのボタン、8 小節のコード譜、ベース・ピアノ・ドラムのパートが並ぶタイムライン。")}
  <figcaption>PC での画面全体。画像を押すと大きく表示します。</figcaption>
</figure>

<h2 id="chords">コードの入力</h2>
<figure class="shot">
  ${img("ja", "chords", "「コードと伴奏」の欄：伴奏のオン・オフ、小節数、ハネ・揺らぎ・バリエーション、別の案、エンディング、テキストで入力、8 小節のコード譜（4・8 小節目にフィル）。")}
  <figcaption>コード譜。小節ごとに 1 拍 1 マスの欄と、ドラムのフィルの選択があります。</figcaption>
</figure>
<ul>
  <li><b>1 拍 1 マス。</b>空のマスは前のコードが続くので、最初のマスに <code>C</code> だけ書いた小節は 1 小節ずっと C です。1 小節に 2 つのコードを入れるときは、2 つ目を始まる拍に書きます（例：1 拍目に <code>F</code>、3 拍目に <code>G</code>）。</li>
  <li><b>書けるコード。</b>メジャー・マイナー・7th・maj7・m7・m7b5・dim・aug・sus2/sus4・6・add9・9 と <code>7(b9)</code> などのテンション、<code>C/E</code> のような分数コード。読めない名前のマスは赤くなります。詳しくは<a href="../chord-symbols/">コードネームの読み方・書き方</a>へ。</li>
  <li><b>小節。</b>− / ＋ で増減します（最大 ${MAX_BARS} 小節）。小節はドラッグで移動でき（タッチ画面では長押ししてから）、コード・フィル・編集も一緒に動きます。</li>
  <li><b>テキストで入力…</b> <code>| C | Am | F G | C |</code> のように、まとめて書けます。</li>
  <li><b>拍子。</b>BPM の横で 4/4 か 3/4 を選びます。</li>
</ul>

<h2 id="backing">伴奏のパート</h2>
<figure class="shot">
  ${img("ja", "tracks", "タイムライン：コードの行、ベース・ピアノ・ドラムのパート（パターンと音色の選択、音量、定位）、その下にボーカルのトラックと波形。")}
  <figcaption>パートごとにパターン・音色・音量・定位があります。ドラムの行の色の付いた小節はフィルです。</figcaption>
</figure>
<ul>
  <li><b>パターン</b>：パートの弾き方です。ベース：${names(BASS_PRESETS, "ja")}。ピアノ：${names(PIANO_PRESETS, "ja")}。ドラム：${names(DRUM_PRESETS, "ja")}。選び方は<a href="../backing-patterns/">ジャンル別・伴奏パターンの選び方</a>へ。</li>
  <li><b>音色</b>：ベース：${names(BASS_TONES, "ja")}。ピアノ：${names(PIANO_TONES, "ja")}。ドラム：${names(DRUM_TONES, "ja")}。どの音もブラウザの中で合成しています。</li>
  <li><b>フィル</b>：コード譜の小節ごとに選びます（${names(FILLS, "ja")}）。フィルの次の小節の頭にはクラッシュが入ります（ドラムのメニュー ⋯ で切れます）。</li>
  <li><b>バリエーション</b>：人が弾くような変化を付けます。ベースは次のコードへ駆け上がり、ピアノはコードを先取りして和音に色を足し、ドラムは 4 小節・8 小節の区切りでクラッシュ・オープンハイハット・短いつなぎを入れます。<b>別の案</b>で組み合わせが変わり、0 にすると元のパターンのままです。</li>
  <li><b>ハネ</b>は裏拍の 8 分音符を後ろにずらします（最大で 3 連のシャッフル）。<b>揺らぎ</b>はタイミングと強さに小さなばらつきを付けます。<b>エンディング</b>をオンにすると、最後の小節の 1 拍目で全員が止まります。</li>
  <li><b>伴奏オン／オフ</b>：オフのときは 3 つのパートがグレーになり、鳴りません。</li>
</ul>

<h2 id="edit">1 音ずつの編集</h2>
<figure class="shot">
  ${img("ja", "editor", "ベースの編集画面：適用先の切り替え（パターン全体／この小節だけ）、グリッド、コードの音に色が付いた鍵盤の行、選んだ音と、移動・音程・長さ・強さ・削除のボタン。")}
  <figcaption>編集画面。いまのコードの音の行に色が付いています。</figcaption>
</figure>
<p>パートの <b>編集</b>（またはパートの行をダブルタップ、コード譜の小節の <b>編集</b>）で開きます。空いたマスを押すと音を追加、音を押すと選択し、移動・音程・長さ・強さの変更や削除ができます。ドラムでは、選んだ打点をもう一度押すと 強く → ゴースト → 消す と変わります。</p>
<ul>
  <li><b>パターン全体</b>はすべての小節に反映されます。音の高さはコードからの相対（「3 度の音」など）で覚えるので、コードが変わると音もついていきます。</li>
  <li><b>この小節だけ</b>はその小節だけを変え、音名で固定します。自動のバリエーションも含めて、聞こえている音から編集できます。編集した小節はタイムラインに赤い印が付きます。</li>
  <li><b>編集を戻す</b>で直前の変更を取り消せます。<b>パターンを元に戻す</b>／<b>自動に戻す</b>でやり直せます。</li>
</ul>

<h2 id="record">録音</h2>
<ol>
  <li>音声トラックの <b>R</b> を押します。初回はブラウザがマイクの許可を求めます。<b>入力</b>のメーターに音の大きさが出ます。</li>
  <li><b>●</b> を押します。<b>録音前カウント</b>がオンなら、クリックが 1 小節鳴ってから録音が始まります。<b>クリック</b>をオンにすると、録音中も再生中もメトロノームが鳴ります。</li>
  <li><b>■</b> で止めます（■ は常に先頭に戻ります）。同じトラックにもう一度録ると、録った範囲だけ置き換わります。<b>元に戻す</b>で前のテイクに戻せます。</li>
</ol>
<div class="note"><p>ヘッドホンを使ってください。スピーカーだと伴奏がマイクに入ります。録った音が伴奏より遅れて（早く）聞こえるときは、⚙ →「<b>録音のずれ補正</b>」で調整します。音声トラックは最大 ${MAX_TRACKS} 本です。録音のコツは<a href="../recording-tips/">家で歌・ギターをきれいに録るコツ</a>へ。</p></div>

<h2 id="import">音声ファイルの読み込みと位置合わせ</h2>
<p>⋯ →「<b>音声ファイルを読み込む…</b>」で、音声ファイル（WAV・MP3・M4A など、ブラウザで再生できる形式）をトラックに置けます。位置を動かすには、波形を長押ししてからドラッグします（PC では Alt を押しながらドラッグでもすぐ動き、Shift で 16 分音符に吸い付きます）。細かく合わせるときは ⋯ →「<b>位置を調整…</b>」：</p>
<figure class="shot">
  ${img("ja", "position", "位置の調整画面：開始位置 +60 ms、−1 小節・−1 拍・−10 ms・−1 ms と + 側のボタン、ミリ秒の入力欄、0 に戻す、3 小節目を繰り返すボタン。")}
  <figcaption>1 小節を繰り返し聞きながら、1 ms・10 ms・1 拍・1 小節ずつ動かせます。</figcaption>
</figure>

<h2 id="fx">エフェクト</h2>
<figure class="shot">
  ${img("ja", "fx", "ボーカルのトラックのエフェクト画面（プリセット「ボーカル」）：EQ（低音・中音・中音の周波数・高音）、コンプレッサー、歪み、リバーブとディレイへ送る量、共通のリバーブの長さとディレイの間隔・繰り返し。")}
  <figcaption>トラックのエフェクト。リバーブとディレイは全トラック共通です。</figcaption>
</figure>
<p>トラックとパートの <b>FX</b> で、EQ・コンプ・歪みと、共通のリバーブ・テンポに合わせたディレイへ送る量を設定します。プリセット：${names(FX_PRESETS, "ja")}。つまみをダブルクリックすると元に戻ります。全体の最後にはリミッターがあるので、ミックスが音割れしません。</p>

<h2 id="timeline">タイムラインの操作</h2>
<p>タイムラインを押すと再生位置が動きます。ピンチ（または Ctrl＋ホイール、− / ＋）で拡大縮小、ドラッグや横スクロールで左右に移動します。再生中は再生位置に合わせて表示が送られます。<b>全体</b>で曲全体の表示に戻ります。</p>

<h2 id="export">保存と書き出し</h2>
<figure class="shot">
  ${img("ja", "mix", "ミックスダウンの画面：WAV（無圧縮で最高音質）か MP3（ファイルが小さく共有向け）を選び、MP3 の音質は 192 kbps。")}
  <figcaption>ミックスダウンは WAV か MP3 を選べます。</figcaption>
</figure>
<ul>
  <li><b>作業内容はブラウザに自動で保存</b>され、ページを開き直すと続きから使えます。<b>すべてクリア</b>で最初からやり直せます。</li>
  <li><b>書き出し（.zip）</b>：設定（<code>project.json</code>）とトラックごとの WAV。<b>読み込み…</b>で、別の端末でも続きができます。</li>
  <li><b>ミックスダウン…</b>：曲全体を WAV（16bit ステレオ）か MP3（${KBPS.join("・")} kbps）で。</li>
  <li><b>伴奏を MIDI で書き出し</b>：ベース・ピアノ・ドラムを、テンポ・拍子・コード名入りの MIDI ファイルに。DAW でアレンジを仕上げるときに。</li>
  <li><b>伴奏を音声トラックに</b>：伴奏全体（パートの ⋯ なら 1 パート）を音声トラックに変換します。</li>
</ul>
<p>書き出すときはファイル名を選べます（最初はプロジェクト名）。</p>

<h2 id="phone">スマホ・タブレットで使う</h2>
<figure class="shot phone">
  ${img("ja", "phone", "スマホでの画面：コード譜が 1 行に 2 小節ずつ並び、その下にタイムラインとベースのパート。", { half: true })}
  <figcaption>スマホではコード譜が 1 行 2 小節になります。タイムラインは下にスクロールします。</figcaption>
</figure>
<p>スマホでもすべての機能が使えます。録音には有線のヘッドホンを使ってください（Bluetooth のヘッドホンは遅れが大きく、補正しきれないことがあります）。録音中は画面を消さないでください。</p>
`,
  },
};
