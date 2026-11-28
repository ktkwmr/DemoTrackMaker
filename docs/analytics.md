# 利用状況の計測（Cloudflare Zaraz + Google Analytics 4）

ページの滞在時間・ボタンのタップ・設定の変更・主な機能の結果を、Cloudflare Zaraz 経由で GA4 に送る（ベースライン §17）。
**同意バナーで「すべて同意」を選んだ人だけ**が GA4 に送られる。閲覧数は今までどおり Cloudflare Web Analytics（Cookie なし）でも数える。
同意の Cookie（`zaraz-consent`）は ktkwmr.com のすべてのアプリで共通。

## しくみ

- `index.html`・記事のページ（`scripts/pages/layout.mjs`）・`public/404.html` の `<head>` で `/cdn-cgi/zaraz/i.js`（Zaraz）と `/demotrackmaker/usage-events.js` を読む。
  Zaraz の「Auto-inject script」は切ってあるので、Zaraz が動くのはこのタグを書いたページだけ。
- `usage-events.js`（ベースラインの `templates/public/__slug__/usage-events.js` のコピー。違うのは `PREFIX` だけ）: すべてのボタン・リンクのタップ（`dtm_tap`）、設定の変更（`dtm_change`）、ページが見えていた時間（`dtm_engaged`）を送る。`window.usage.track(name, params)`（→ `dtm_<name>`）と `window.usage.playing(on)`（音が鳴っている時間）をアプリに渡す。フッターの「Cookie の設定」（`.cookie-settings`）で `zaraz.showConsentModal()` を開く。
- アプリの主な機能のイベントは `index.html` の `play()`・`pause()`・`startRecording()`・`stopRecording()`・`exportFile()`（書き出しはすべてここを通る）・`importProjectFile()`・音声ファイルの読み込み・`bounceBacking()`（`track()` → `window.usage.track`）。
- Zaraz がないとき（`wrangler dev`、workers.dev のプレビュー、ブラウザがブロック）は何も送らない。`i.js` が 404 になるだけで、アプリは動く。
- 同じオリジン（`/cdn-cgi/zaraz/…`）なので CSP・COEP は変えていない。Zaraz が GA4 に送るのは Cloudflare のサーバーからで、ブラウザは Google に直接つながない。
- `sw.js` は `/cdn-cgi/` をキャッシュしない（Zaraz のスクリプトはリクエストごとに作られる）。

**プロジェクト名・トラック名・ファイル名・入力したコード・録音した音は送らない（数・長さ・種類・結果だけ）。** イベントを足すときもこれを守り、プライバシーの説明（`scripts/pages/privacy.mjs`、`index.html` の `privacy.body`、README）に書いた範囲に収める。範囲を広げるときは説明も同じ PR で直す。
利用者が名前を付けたもの（曲・セット・トラックなど）が選択肢になる `<select>` には `data-track-value="off"` を付ける（変えたことだけを送り、値は送らない）。文字の入力欄の中身は送らない。

## イベント

すべてのイベントに `ui_lang`（`en` / `ja`）が付く。

| イベント | パラメーター | いつ |
|---|---|---|
| `dtm_tap` | `button` | ボタン・リンク・タブを押したとき。名前は `data-track`、要素の `id`、`data-i18n`（`data-i18n-attr`）のキー（上にある id を `id:キー` の形で前に付ける）、リンクは `link:/demotrackmaker/guide/` や `link:github.com`、「Cookie の設定」は `cookie-settings`、それ以外は「上にある id:クラス名」。アプリが自分で起こすクリック（ダウンロードなど）は数えない |
| `dtm_change` | `control`, `value`, `files` | セレクト・スライダー（離したとき）・数値・チェックボックス（`on`/`off`）・ラジオを変えたとき。ファイルを選んだときは `value` が拡張子（複数は `+`）・`files` が数。名前の付け方は `dtm_tap` と同じ |
| `dtm_engaged` | `seconds`, `play_seconds` | ページが隠れたとき・閉じたとき。前回から、ページが見えていた秒数と音が鳴っていた秒数 |
| `dtm_play` | `tracks`（音のあるトラックの数）, `bars`, `backing`（on / off）, `bpm` | 再生し始めたとき（シークで鳴らし直したときは数えない） |
| `dtm_pause` | `seconds` | 一時停止・停止したとき。再生していた秒数 |
| `dtm_record` | `result`（ok / no-arm / no-mic / empty / too-short）, `seconds`, `punch_in`（yes / no）, `count_in`, `tracks`, `bars`, `backing`, `bpm` | 録音が終わったとき（または始められなかったとき） |
| `dtm_export` | `kind`（project / mix / backing / track）, `type`（zip / wav / mp3 / mid）, `result`（picker / download / cancel / nothing / error）, `kbps`, `minutes`, `tracks`, `bars`, `backing`, `bpm` | プロジェクト・ミックスダウン・MIDI・トラックの WAV を書き出したとき |
| `dtm_import` | `kind`（project / audio）, `type`（拡張子）, `result`（ok / error）, `minutes`, `tracks`, `bars` | プロジェクト（zip）か音声ファイルを読み込んだとき |
| `dtm_bounce` | `parts`（パート名 / all） | 伴奏を音声トラックに書き出したとき |

イベント名を足すときは `dtm_` で始める（GA4 はドメインで 1 つなので、アプリで分けるため）。パラメーターの名前はほかのアプリと同じものを使い回す（GA4 のカスタム定義はディメンション・指標それぞれ 50 個まで）。

## 設定（Cloudflare・GA4）

ドメインで 1 回だけの設定（GA4 のプロパティ `ktkwmr.com`・測定 ID `G-HM6P805V7F`、Zaraz のツール・同意バナー）は Sheet Music Player の `docs/analytics.md` とベースライン §17-1〜17-6。
全アプリに入れたので、Zaraz を一部のページで止めていた Configuration Rule は消す（2026-11-28 の計画。消したかどうかは `docs/baseline-status.md` の 17-13）。

## GA4 で登録するカスタム定義

GA4 → 管理 → カスタム定義。登録しないとレポートに出ない（さかのぼっても出ない）。ほかのアプリで登録済みの名前は登録し直さなくてよい（同じ名前のパラメーターは共通）。

| 種類 | 名前（パラメーター） | 範囲・単位 |
|---|---|---|
| カスタムディメンション | `button`, `control`, `value`, `ui_lang`, `result`, `kind`, `type`, `backing`, `punch_in`, `count_in`, `parts` | イベント |
| カスタム指標 | `seconds` | イベント・秒 |
| カスタム指標 | `play_seconds` | イベント・秒 |
| カスタム指標 | `files` | イベント・標準 |
| カスタム指標 | `tracks` | イベント・標準 |
| カスタム指標 | `bars` | イベント・標準 |
| カスタム指標 | `bpm` | イベント・標準 |
| カスタム指標 | `kbps` | イベント・標準 |
| カスタム指標 | `minutes` | イベント・標準 |

## 確かめ方

- ローカル: Playwright の `context.route("**/cdn-cgi/zaraz/i.js")` に `window.zaraz = { track() {…}, showConsentModal() {…} }` の代わりを返させ、送られるイベントを見る（ベースライン §17-12）。Playwright の `selectOption` などは `isTrusted` でないイベントを起こすので数えられない。キーボード（`focus` → `ArrowDown`）かクリックで操作する。
- 本番: ブラウザのコンソールで `zaraz.debug("<Debug key>")` を実行して再読み込みすると、Zaraz の送信内容が表示される。GA4 の「リアルタイム」・DebugView にも出る。
