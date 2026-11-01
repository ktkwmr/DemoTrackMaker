// Privacy policy (site information page, linked from the footer and from the app's Privacy dialog).
// Includes the external-transmission notice required in Japan (電気通信事業法の外部送信規律).
// Update `modified` and the dates at the end when the content changes (for example when a service is added).
const ISSUES = "https://github.com/ktkwmr/DemoTrackMaker/issues";
const CLOUDFLARE = "https://www.cloudflare.com/privacypolicy/";
const JSDELIVR = "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net";

export default {
  slug: "privacy",
  schemaType: "WebPage",
  modified: "2026-11-01",
  en: {
    title: "Privacy Policy",
    heading: "Privacy policy",
    nav: "Privacy policy",
    description:
      "How Demo Track Maker handles information: recording and mixing happen on your device and nothing is uploaded, what is saved in your browser, the MP3 encoder download (jsDelivr), analytics without cookies, and no ads.",
    body: () => `
<p class="lead">This policy explains how Demo Track Maker (https://ktkwmr.com/demotrackmaker/, "this site") handles information. In short: what you record and the songs you make stay on your device. Nothing is uploaded.</p>

<nav class="toc" aria-label="Contents"><b>Contents</b><ol>
  <li><a href="#app">What you do in the app</a></li>
  <li><a href="#storage">Data saved in your browser</a></li>
  <li><a href="#external">Information sent to external services</a></li>
  <li><a href="#cookies">Cookies and advertising</a></li>
  <li><a href="#analytics">Analytics</a></li>
  <li><a href="#third-party">Sharing with third parties</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#changes">Changes to this policy</a></li>
</ol></nav>

<h2 id="app">1. What you do in the app</h2>
<p>The chords you type, the backing made from them, the sound you record with the microphone, the audio files you open, and the effects and mix are all processed only in your browser. None of them, and none of their names, are sent to our server or to anyone else. The microphone is used only while a track is armed for recording, after your browser asks for your permission. Exporting a project, a mixdown (WAV or MP3), a track, or MIDI only saves a file on your device. This site has no accounts, and we do not ask for your name, email address, or other personal information.</p>

<h2 id="storage">2. Data saved in your browser</h2>
<p>The following data is saved in your browser's storage on your device. It is not sent to us.</p>
<ul>
  <li><b>Your project:</b> the project name, tempo, chords, backing settings and edits, effects, and the audio of each track (IndexedDB), so you can continue after reloading.</li>
  <li><b>The last mixdown format:</b> WAV or MP3 and the MP3 quality (localStorage).</li>
  <li><b>App files:</b> the pages and files of this site, and the MP3 encoder once it has been used, so the app works offline (Cache Storage).</li>
</ul>
<p>To delete your project, use “Clear all” in the app. To delete everything, clear this site's data (site data and storage for ktkwmr.com) in your browser settings. If you want to keep a project, export it as a zip file first.</p>

<h2 id="external">3. Information sent to external services</h2>
<p>When you use this site, your browser sends information to the following services. This list also serves as the notice of external transmission required under Japan's Telecommunications Business Act.</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">Service (operator)</th><th scope="col">When</th><th scope="col">Information sent</th><th scope="col">Purpose</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a> (Cloudflare, Inc.)</th><td data-label="When:">Every page and file request</td><td data-label="Information sent:">IP address, browser information (user agent), requested URL, date and time</td><td data-label="Purpose:">Hosting this site, security, and access logs for operation</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Web Analytics</a> (Cloudflare, Inc.)</th><td data-label="When:">Every page view</td><td data-label="Information sent:">IP address, browser information (user agent), the URL of the page, referrer, page load time. No cookies are used.</td><td data-label="Purpose:">Counting page views (see "Analytics" below)</td></tr>
      <tr><th scope="row"><a href="${JSDELIVR}" rel="noopener">jsDelivr</a> (a CDN run by Prospect One and its partners)</th><td data-label="When:">Only when you choose MP3 for a mixdown (until the encoder is saved in your browser)</td><td data-label="Information sent:">IP address, browser information (user agent), the URL of the library file, the page that requested it (referrer), date and time. Your audio is not sent.</td><td data-label="Purpose:">Downloading lamejs, the library that converts the mixdown to MP3 on your device</td></tr>
    </tbody>
  </table>
</div>

<h2 id="cookies">4. Cookies and advertising</h2>
<p>This site does not set cookies and does not show ads. If we add ads in the future, we will update this policy before they are shown.</p>

<h2 id="analytics">5. Analytics</h2>
<p>To see how many people use this site, we use <b>Cloudflare Web Analytics</b>. It counts page views without cookies and without identifying or tracking individual visitors across sites. We do not use Google Analytics.</p>

<h2 id="third-party">6. Sharing with third parties</h2>
<p>We do not collect personal information that identifies you, and we do not sell or provide it to third parties, except where required by law.</p>

<h2 id="contact">7. Contact</h2>
<p>For questions about this policy, please open an issue on <a href="${ISSUES}" rel="noopener">GitHub Issues</a>. See <a href="../about/">about this site</a> for the operator.</p>

<h2 id="changes">8. Changes to this policy</h2>
<p>We may update this policy when the site changes, for example when we add or remove a service. The updated policy applies from the time it is posted on this page.</p>
<p>Effective: November 1, 2026</p>
`,
  },
  ja: {
    title: "プライバシーポリシー",
    heading: "プライバシーポリシー",
    nav: "プライバシーポリシー",
    description:
      "Demo Track Maker のプライバシーポリシー。録音やミックスは端末の中で行いアップロードしないこと、ブラウザに保存するデータ、MP3 変換の部品のダウンロード（jsDelivr）、Cookie を使わないアクセス解析、広告がないことについて。",
    body: () => `
<p class="lead">Demo Track Maker（https://ktkwmr.com/demotrackmaker/、以下「本サイト」）での情報の取り扱いについて説明します。要点は、録音した音や作った曲は端末の中にだけあり、どこにもアップロードしないことです。</p>

<nav class="toc" aria-label="目次"><b>目次</b><ol>
  <li><a href="#app">アプリで行うこと</a></li>
  <li><a href="#storage">ブラウザに保存するデータ</a></li>
  <li><a href="#external">外部への情報の送信</a></li>
  <li><a href="#cookies">Cookie と広告</a></li>
  <li><a href="#analytics">アクセス解析</a></li>
  <li><a href="#third-party">第三者への提供</a></li>
  <li><a href="#contact">お問い合わせ</a></li>
  <li><a href="#changes">改定</a></li>
</ol></nav>

<h2 id="app">1. アプリで行うこと</h2>
<p>入力したコード、そこから作る伴奏、マイクで録音した音、読み込んだ音声ファイル、エフェクトやミックスは、すべてブラウザの中だけで処理します。これらとその名前が、運営者のサーバーやほかの誰かに送られることはありません。マイクは、トラックを録音待機にしたときに、ブラウザが許可を求めてから使います。プロジェクト・ミックスダウン（WAV・MP3）・トラック・MIDI の書き出しは、端末にファイルを保存するだけです。本サイトにはアカウント登録はなく、氏名やメールアドレスなどの個人情報をお聞きすることもありません。</p>

<h2 id="storage">2. ブラウザに保存するデータ</h2>
<p>次のデータを、お使いの端末のブラウザ内に保存します。運営者に送られることはありません。</p>
<ul>
  <li><b>プロジェクト：</b>再読み込みしても続きができるよう、プロジェクト名・テンポ・コード・伴奏の設定と編集・エフェクト・各トラックの音声を保存します（IndexedDB）。</li>
  <li><b>前回のミックスダウンの形式：</b>WAV か MP3 か、MP3 の音質（localStorage）。</li>
  <li><b>アプリのファイル：</b>オフラインでも使えるよう、本サイトのページやファイルと、一度使った MP3 変換の部品を保存します（Cache Storage）。</li>
</ul>
<p>プロジェクトを消すには、アプリの「すべてクリア」を使ってください。すべて消すには、ブラウザの設定でこのサイト（ktkwmr.com）のデータ（サイトデータ・ストレージ）を削除してください。残しておきたいプロジェクトは、先に zip に書き出してください。</p>

<h2 id="external">3. 外部への情報の送信</h2>
<p>本サイトを利用すると、お使いのブラウザから次のサービスに情報が送信されます。この一覧は、電気通信事業法の外部送信規律に基づく公表を兼ねています。</p>
<div class="table-wrap">
  <table class="text stack">
    <thead><tr><th scope="col">送信先（事業者）</th><th scope="col">送信のタイミング</th><th scope="col">送信される情報</th><th scope="col">利用目的</th></tr></thead>
    <tbody>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare</a>（Cloudflare, Inc.）</th><td data-label="タイミング：">すべてのページ・ファイルの読み込み時</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報（ユーザーエージェント）、アクセスした URL、日時</td><td data-label="利用目的：">本サイトの配信、セキュリティの確保、運用のためのアクセスログ</td></tr>
      <tr><th scope="row"><a href="${CLOUDFLARE}" rel="noopener">Cloudflare Web Analytics</a>（Cloudflare, Inc.）</th><td data-label="タイミング：">ページを開いたとき</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報（ユーザーエージェント）、閲覧したページの URL、参照元、ページの表示速度。Cookie は使いません。</td><td data-label="利用目的：">ページの閲覧数の集計（「アクセス解析」の項目を参照）</td></tr>
      <tr><th scope="row"><a href="${JSDELIVR}" rel="noopener">jsDelivr</a>（Prospect One とそのパートナーが運営する CDN）</th><td data-label="タイミング：">ミックスダウンで MP3 を選んだときだけ（部品がブラウザに保存されるまで）</td><td data-label="送信される情報：">IP アドレス、ブラウザの情報（ユーザーエージェント）、ライブラリのファイルの URL、読み込んだページ（参照元）、日時。音声は送りません。</td><td data-label="利用目的：">ミックスダウンを端末の中で MP3 に変換するライブラリ lamejs のダウンロード</td></tr>
    </tbody>
  </table>
</div>

<h2 id="cookies">4. Cookie と広告</h2>
<p>本サイトは Cookie を設定せず、広告も表示しません。今後広告を表示する場合は、表示を始める前に本ポリシーを改定します。</p>

<h2 id="analytics">5. アクセス解析</h2>
<p>本サイトの利用状況を知るため、<b>Cloudflare Web Analytics</b> を使用しています。Cookie を使わずにページの閲覧数を集計するもので、個人を特定したり、ほかのサイトをまたいで追跡したりはしません。Google アナリティクスは使用していません。</p>

<h2 id="third-party">6. 第三者への提供</h2>
<p>本サイトは、個人を特定できる情報を収集していません。法令に基づく場合を除き、個人情報を第三者に販売・提供することはありません。</p>

<h2 id="contact">7. お問い合わせ</h2>
<p>本ポリシーについてのご質問は、<a href="${ISSUES}" rel="noopener">GitHub の Issues</a> にお寄せください。運営者については<a href="../about/">運営者情報</a>をご覧ください。</p>

<h2 id="changes">8. 改定</h2>
<p>サービスの追加・終了など本サイトの変更に合わせて、本ポリシーを改定することがあります。改定後のポリシーは、このページに掲載した時点から適用されます。</p>
<p>制定日：2026 年 11 月 1 日</p>
`,
  },
};
