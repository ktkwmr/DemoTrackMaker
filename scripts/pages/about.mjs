// Operator information (site information page, linked from the footer)
const ISSUES = "https://github.com/ktkwmr/DemoTrackMaker/issues";
const REPO = "https://github.com/ktkwmr/DemoTrackMaker";

export default {
  slug: "about",
  schemaType: "AboutPage",
  modified: "2026-11-01",
  en: {
    title: "About This Site",
    heading: "About this site",
    nav: "About this site",
    description: "Operator information for Demo Track Maker: who runs the site, what it is for, how to contact us, disclaimer, and copyright.",
    body: () => `
<div class="table-wrap">
  <table class="text stack">
    <tbody>
      <tr><th scope="row">Site name</th><td>Demo Track Maker</td></tr>
      <tr><th scope="row">URL</th><td><a href="/demotrackmaker/">https://ktkwmr.com/demotrackmaker/</a></td></tr>
      <tr><th scope="row">Operator</th><td>ktkwmr (individual developer)</td></tr>
      <tr><th scope="row">What we offer</th><td>A free web app for making song demos: it turns a chord progression into bass, piano and drum backing, records vocals or instruments on top, and exports WAV, MP3, MIDI or the whole project</td></tr>
      <tr><th scope="row">Contact</th><td><a href="${ISSUES}" rel="noopener">GitHub Issues</a></td></tr>
    </tbody>
  </table>
</div>

<h2 id="purpose">What it is for</h2>
<p>Demo Track Maker is a sketchpad for song demos, practice backing tracks, and arrangement ideas. It is not meant to replace a recording studio or a DAW (digital audio workstation): for detailed editing and mixing, export the tracks as WAV or the backing as MIDI and continue in a DAW.</p>

<h2 id="contact">Contact</h2>
<p>For questions, bug reports, and suggestions, please open an issue on <a href="${ISSUES}" rel="noopener">GitHub Issues</a>. A GitHub account (free) is required.</p>
<p>Issues are public. Do not include personal information, and do not attach your recordings. For a problem, the steps to reproduce it, your browser, and your device are enough.</p>

<h2 id="disclaimer">Disclaimer</h2>
<ul>
  <li>The backing is generated automatically from patterns, with synthesized sounds. We do not guarantee that it suits your song, or that the information on this site is correct or complete.</li>
  <li>Recording timing depends on the device and the audio interface. Use “Recording latency” in the app's settings to line up the takes.</li>
  <li>Your project is kept in your browser. It can be lost if the browser's data is cleared. Export the projects you want to keep as zip files.</li>
  <li>Record and publish only songs you wrote or have the rights to use. You are responsible for how you use the files you make.</li>
  <li>We are not responsible for any loss or damage resulting from the use of this site.</li>
  <li>Links to other websites are provided for convenience. We are not responsible for their content.</li>
  <li>The content of this site may be changed or removed, and the service may be stopped, without notice.</li>
</ul>

<h2 id="copyright">Copyright</h2>
<ul>
  <li>The app's source code is published under the <a href="${REPO}/blob/main/LICENSE" rel="noopener">MIT License</a>. The library used by the app (lamejs, for MP3, based on <a href="https://lame.sourceforge.io/" rel="noopener">LAME</a>) is listed under Settings → About in the app.</li>
  <li>The backing patterns and sounds are made by the app; you may use the backing you make in your own songs and demos.</li>
  <li>The text and images on this site are © 2026 ktkwmr.</li>
</ul>

<h2 id="privacy">Privacy</h2>
<p>How this site handles information is described in the <a href="../privacy/">privacy policy</a>.</p>
`,
  },
  ja: {
    title: "運営者情報",
    heading: "運営者情報",
    nav: "運営者情報",
    description: "Demo Track Maker の運営者情報。運営者、サイトの目的、お問い合わせ先、免責事項、著作権について。",
    body: () => `
<div class="table-wrap">
  <table class="text stack">
    <tbody>
      <tr><th scope="row">サイト名</th><td>Demo Track Maker</td></tr>
      <tr><th scope="row">URL</th><td><a href="/demotrackmaker/ja/">https://ktkwmr.com/demotrackmaker/ja/</a></td></tr>
      <tr><th scope="row">運営者</th><td>ktkwmr（個人開発者）</td></tr>
      <tr><th scope="row">内容</th><td>コード進行からベース・ピアノ・ドラムの伴奏を作り、歌や楽器を重ねて録音し、WAV・MP3・MIDI・プロジェクトに書き出せる、デモ音源づくりのための無料の Web アプリ</td></tr>
      <tr><th scope="row">お問い合わせ</th><td><a href="${ISSUES}" rel="noopener">GitHub の Issues</a></td></tr>
    </tbody>
  </table>
</div>

<h2 id="purpose">このアプリの位置づけ</h2>
<p>Demo Track Maker は、曲のデモ・練習用の伴奏・アレンジのアイデアを手早く形にするための道具です。録音スタジオや DAW（音楽制作ソフト）の代わりではありません。細かい編集やミックスは、トラックを WAV、伴奏を MIDI に書き出して DAW で行ってください。</p>

<h2 id="contact">お問い合わせ</h2>
<p>ご質問・不具合の報告・ご要望は、<a href="${ISSUES}" rel="noopener">GitHub の Issues</a> にお寄せください。投稿には GitHub のアカウント（無料）が必要です。</p>
<p>Issues の内容は公開されます。個人情報は書かず、録音したファイルも添付しないでください。不具合は、再現する手順とブラウザ・端末の種類があれば十分です。</p>

<h2 id="disclaimer">免責事項</h2>
<ul>
  <li>伴奏はパターンと合成した音で自動的に作るものです。曲に合うことや、本サイトの情報が正確・完全であることを保証するものではありません。</li>
  <li>録音のタイミングは端末やオーディオインターフェースによって変わります。アプリの設定の「録音のずれ補正」で合わせてください。</li>
  <li>プロジェクトはブラウザの中に保存しています。ブラウザのデータを消すと失われることがあります。残したいプロジェクトは zip に書き出してください。</li>
  <li>録音・公開するのは、自分で作った曲か、使う権利のある曲だけにしてください。作ったファイルの使い方は利用者の責任となります。</li>
  <li>本サイトの利用によって生じた損害について、運営者は責任を負いません。</li>
  <li>本サイトからリンクしている外部サイトの内容について、運営者は責任を負いません。</li>
  <li>本サイトの内容は、予告なく変更・削除したり、提供を終了したりすることがあります。</li>
</ul>

<h2 id="copyright">著作権</h2>
<ul>
  <li>アプリのソースコードは <a href="${REPO}/blob/main/LICENSE" rel="noopener">MIT ライセンス</a>で公開しています。アプリが使用しているライブラリ（MP3 変換の lamejs。<a href="https://lame.sourceforge.io/" rel="noopener">LAME</a> がもと）は、アプリの「設定 → このアプリについて」に掲載しています。</li>
  <li>伴奏のパターンと音はアプリが作るもので、作った伴奏はご自身の曲やデモに使えます。</li>
  <li>本サイトの文章と画像の著作権は ktkwmr に帰属します（© 2026 ktkwmr）。</li>
</ul>

<h2 id="privacy">プライバシー</h2>
<p>本サイトでの情報の取り扱いについては<a href="../privacy/">プライバシーポリシー</a>をご覧ください。</p>
`,
  },
};
