// Recording vocals and guitar at home (general knowledge + how it applies in the app)
export default {
  slug: "recording-tips",
  en: {
    title: "Recording Vocals and Guitar at Home: Tips for Clean Takes on a Phone or Computer",
    heading: "Recording vocals and guitar at home",
    nav: "Recording tips",
    description:
      "Practical tips for recording vocals and acoustic guitar at home with a phone, a laptop or a USB microphone: headphones, the room, microphone distance, input level, timing and latency, and getting a good take.",
    body: () => `
<p class="lead">You do not need a studio to record a usable demo. Most problems in home recordings come from a few things — the backing leaking into the microphone, a noisy or echoing room, a level that is too low or too high, and timing. Each has a simple fix.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#headphones">Use headphones</a></li>
  <li><a href="#room">Choose a quiet, soft room</a></li>
  <li><a href="#mic">Microphone and distance</a></li>
  <li><a href="#level">Set the input level</a></li>
  <li><a href="#timing">Timing and latency</a></li>
  <li><a href="#take">Getting a good take</a></li>
</ol></nav>

<h2 id="headphones">Use headphones</h2>
<p>If you listen to the backing on speakers, the microphone records it too, and it cannot be removed afterwards. Wear headphones while recording. Closed-back headphones leak the least. <b>Wired</b> headphones are better than Bluetooth ones, which add a delay of a fraction of a second that makes it hard to play in time.</p>

<h2 id="room">Choose a quiet, soft room</h2>
<ul>
  <li>Turn off fans, air conditioners and the fridge if you can, and close the windows.</li>
  <li>Bare walls and floors make an echo that sounds like a bathroom. A room with curtains, a carpet, a bed or a sofa sounds drier. Recording in front of a wardrobe full of clothes is an old home-recording trick.</li>
  <li>Do not face a wall or a window up close; the sound bounces straight back into the microphone.</li>
</ul>

<h2 id="mic">Microphone and distance</h2>
<ul>
  <li><b>Phone or laptop microphone.</b> Fine for a demo. Keep the distance the same for the whole take and do not hold the phone in your hand (handling noise).</li>
  <li><b>USB microphone or an audio interface.</b> Clearer and lower in noise. Choose it in your browser's microphone permission (or the system settings).</li>
  <li><b>Vocals.</b> About a hand's width to 20 cm (8 in) from the mouth. Closer makes it warmer but adds pops on “p” and “b”; a pop filter or singing slightly past the microphone helps.</li>
  <li><b>Acoustic guitar.</b> About 20–30 cm (8–12 in) away, pointed where the neck meets the body rather than at the sound hole, which sounds boomy.</li>
</ul>

<h2 id="level">Set the input level</h2>
<p>Sing or play the loudest part and watch the input meter. It should move well above the middle but never reach the end; a sound that hits the top distorts, and the distortion cannot be fixed later. If it is too quiet, move a little closer rather than shouting. Demo Track Maker records with the browser's automatic gain control and noise suppression turned off, so the level you see is the level you get.</p>

<h2 id="timing">Timing and latency</h2>
<p>Every computer and phone needs a short time to get sound in and out. You hear the backing a little late and the microphone hears you a little late, so a take can end up behind the beat. Demo Track Maker moves each new take earlier by an estimate of this delay; if takes still sound early or late, adjust ⚙ → <b>Recording latency</b>. To find the right value, record yourself clapping on the click and see where the claps land in the waveform. Imported or recorded takes can also be moved afterwards by dragging the waveform.</p>
<p>The count-in (one bar of clicks before recording) helps you start in time, and the click during recording helps you stay there.</p>

<h2 id="take">Getting a good take</h2>
<ul>
  <li>Warm up first, and record the whole song a few times rather than one line over and over. Keep the take that feels best, not the one with no mistakes.</li>
  <li>To fix one phrase, start playback a bar before it and record over only that part: recording replaces just the recorded range.</li>
  <li>Record a second take on another track if you might want to compare; you can mute the one you do not use.</li>
  <li>Save your work: export the project as a zip before trying something big.</li>
</ul>
`,
  },
  ja: {
    title: "家で歌・ギターをきれいに録るコツ｜スマホ・PC での宅録の基本",
    heading: "家で歌・ギターをきれいに録るコツ",
    nav: "宅録のコツ",
    description:
      "スマホ・ノート PC・USB マイクで歌やアコギを家で録るときの基本。ヘッドホン、部屋の選び方、マイクとの距離、入力レベル、タイミングと遅れ（レイテンシー）、いいテイクを録るコツ。",
    body: () => `
<p class="lead">デモなら、スタジオがなくても十分に使える録音ができます。家での録音の失敗の多くは、伴奏がマイクに入る、部屋がうるさい・響く、音量が小さすぎる・大きすぎる、タイミングがずれる、の 4 つです。どれも簡単な工夫で防げます。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#headphones">ヘッドホンを使う</a></li>
  <li><a href="#room">静かで響かない部屋を選ぶ</a></li>
  <li><a href="#mic">マイクと距離</a></li>
  <li><a href="#level">入力レベルを合わせる</a></li>
  <li><a href="#timing">タイミングと遅れ</a></li>
  <li><a href="#take">いいテイクを録るには</a></li>
</ol></nav>

<h2 id="headphones">ヘッドホンを使う</h2>
<p>伴奏をスピーカーで聞きながら録ると、マイクが伴奏も拾い、あとから消せません。録音中はヘッドホンを使います。音漏れが少ないのは密閉型です。Bluetooth のヘッドホンは音が一瞬遅れて合わせにくいので、<b>有線</b>のものがおすすめです。</p>

<h2 id="room">静かで響かない部屋を選ぶ</h2>
<ul>
  <li>扇風機・エアコン・冷蔵庫など、止められるものは止め、窓を閉めます。</li>
  <li>何もない壁や床は、お風呂場のような響きになります。カーテン・カーペット・ベッド・ソファのある部屋のほうが響きが少なくなります。服がたくさん掛かったクローゼットの前で録るのは、宅録の昔からの工夫です。</li>
  <li>壁や窓のすぐ前を向いて録ると、音がはね返ってマイクに戻ります。少し離れましょう。</li>
</ul>

<h2 id="mic">マイクと距離</h2>
<ul>
  <li><b>スマホや PC の内蔵マイク。</b>デモには十分です。テイクの間は距離を変えず、スマホは手に持たずに置きます（持つと触れた音が入ります）。</li>
  <li><b>USB マイクやオーディオインターフェース。</b>よりクリアで雑音が少なくなります。ブラウザのマイクの許可（または OS の設定）で選びます。</li>
  <li><b>歌。</b>口からこぶし 1 つ分〜20 cm くらい。近いほど太い音になりますが、「パ」「バ」で息が当たってボコッと鳴りやすくなります。ポップガードを使うか、マイクの少し横に向かって歌うと防げます。</li>
  <li><b>アコースティックギター。</b>20〜30 cm くらい離し、サウンドホールではなく、ネックと胴のつなぎ目あたりに向けます。サウンドホールに向けると低音がこもります。</li>
</ul>

<h2 id="level">入力レベルを合わせる</h2>
<p>いちばん大きく歌う（弾く）ところで、入力のメーターを見ます。真ん中より十分上まで振れ、端には届かないのが目安です。端まで届くと音が割れ、あとから直せません。小さすぎるときは、大声を出すより少し近づきます。Demo Track Maker は、ブラウザの自動音量調整と雑音除去を切って録音するので、メーターで見た大きさのまま録れます。</p>

<h2 id="timing">タイミングと遅れ</h2>
<p>パソコンやスマホは、音を出し入れするのにわずかな時間がかかります（レイテンシー）。伴奏は少し遅れて聞こえ、自分の音も少し遅れて記録されるので、録った音が拍より後ろにずれることがあります。Demo Track Maker は、この遅れの推定値だけ新しいテイクを前にずらしますが、まだ早い・遅いと感じるときは ⚙ →「<b>録音のずれ補正</b>」で調整してください。クリックに合わせて手拍子を録り、波形の位置を見ると合わせやすくなります。読み込んだ音や録ったテイクは、あとから波形をドラッグして動かすこともできます。</p>
<p>録音前カウント（録音の前に鳴る 1 小節のクリック）で入りのタイミングをつかみ、録音中のクリックで拍を保ちます。</p>

<h2 id="take">いいテイクを録るには</h2>
<ul>
  <li>声出しやウォームアップをしてから、1 行ずつ録り直すより、曲を通して何回か録ります。ミスのないテイクより、気持ちよく聞けるテイクを選びましょう。</li>
  <li>1 フレーズだけ直すときは、1 小節前から再生してその部分だけ録り直します。録った範囲だけが置き換わります。</li>
  <li>比べたいときは、別のトラックにもう 1 テイク録ります。使わないほうはミュートすれば OK です。</li>
  <li>大きく変える前に、プロジェクトを zip に書き出して保存しておきましょう。</li>
</ul>
`,
  },
};
