# ベースラインの実施状況（Demo Track Maker）

基準: WEBAPP_BASELINE.md（最終更新 2026-10-30 版）
状態: ✅ 実装済み / ⚠️ 一部 / ❌ 未実装 / 👤 待ち（人間の作業） / — 対象外
最終更新: 2026-11-02（ライトテーマ固定、シャッフルをオン・オフに、エンディング・キー変更。記事 3 本と画面写真を更新）

## 0. 変数

| 変数 | 値 |
|---|---|
| アプリ名 | Demo Track Maker（2026-11 に MiniMTR から改名） |
| スラッグ | `demotrackmaker` |
| ドメイン | `ktkwmr.com`（§0 の A: 別 Worker + Route `ktkwmr.com/demotrackmaker*`） |
| リポジトリ | `ktkwmr/DemoTrackMaker` |
| 運営者・問い合わせ | ktkwmr / GitHub Issues |
| 言語 | en（既定）+ ja（`/ja/`） |
| Web Analytics token | ほかのアプリと同じ（`5c53079cb9a64d819d1ca53e8533ca63`） |
| 初回の Artifact（§12-12） | https://claude.ai/artifact/4nMf28C3KohMKsawGB1vNZ （Artifact の中ではマイクが使えない。WAV・MIDI は zip に包んで保存される） |

## 項目

| # | 項目 | 状態 | メモ |
|---|---|---|---|
| 1-4 | Claude の GitHub App | ✅ | このセッションで push できた |
| 1-8 | Cloudflare の GitHub App | 👤 | 「Only select repositories」なら DemoTrackMaker を追加 |
| 2-1 | wrangler.jsonc | ✅ | `build.command`・`routes`・`workers_dev: false`・`preview_urls: true`・`previews: {}` |
| 2-2 | `/` の転送 | — | ドメイン直下は `ktkwmr/ktkwmr.com` |
| 2-3 | 404.html | ✅ | |
| 2-4〜2-10 | .gitignore・LF・`--check`・README・LICENSE・CLAUDE.md・バージョンなし | ✅ | |
| 2-11 | Cloudflare に接続 | 👤 | Project name は `demotrackmaker`、Production branch は `main` |
| 2-13 | 自動デプロイの確認 | 👤 | |
| 2-14 | 2 つ目以降のアプリの Worker 設定 | ✅ | sitemap は `/demotrackmaker/sitemap.xml` |
| 2-16 | トップページへの追加 | ✅ | ktkwmr/ktkwmr.com#12 をマージ済み（このアプリの本番公開の前にマージしたので、公開までカードのリンクは 404） |
| 3-1〜3-5 | manifest・アイコン・meta・sw.js・SW 登録 | ✅ | |
| 3-6 | `file://` の注意 | ✅ | README |
| 3-7 | インストールの案内 | ❌ | 任意 |
| 3-8 | アイコンの生成 | ✅ | `scripts/render-icons.mjs` |
| 3-9 | COEP とワーカー | — | COEP もワーカーも使わない |
| 3-10 | CDN のオフライン対応 | ✅ | `sw.js` の `CDN` に lamejs 1.2.1 |
| 4-1〜4-3 | I18N・言語の決め方・日本語ページの生成 | ✅ | `scripts/build-ja.mjs` |
| 4-4 | 日本語の検索用タイトル・説明 | 👤 | `scripts/build-ja.mjs` 冒頭の案を確認（docs/article-review.md の A） |
| 4-7 | `<base>` と URL | ✅ | 相対 URL は sw.js・manifest・アイコン・THIRD_PARTY_LICENSES.md だけ。E2E で `/ja/` の録音・書き出し・ライセンス表示を確認 |
| 5-1〜5-8 | title・canonical・hreflang・OGP・og-image・JSON-LD・h1・説明 | ✅ | アプリの下に説明とガイドの一覧 |
| 5-10 | sitemap はアプリごと | ✅ | |
| 5-11 | スマホでスクロールを止めない | ✅ | |
| 6-1〜6-4 | セキュリティヘッダー・CSP | ✅ | `public/_headers`。マイクは `microphone=(self)`。`wrangler dev` の E2E で CSP 違反・コンソールエラー 0 件 |
| 7-1〜7-3 | プライバシー（アプリ内・ポリシー）・運営者情報 | ✅ | 外部送信: Cloudflare・Web Analytics・jsDelivr（MP3 のときだけ） |
| 7-7 | ポリシーの外部リンクの確認 | 👤 | |
| 8-1〜8-3 | THIRD_PARTY_LICENSES・Actions・About | ✅ | lamejs（LGPL-3.0、改変なしで別ファイルとして読む）。About ダイアログで表示 |
| 8-4 | CDN のバージョン固定・必要なときだけ読む | ✅ | lamejs は MP3 を選んだときだけ、SRI 付き |
| 9-1〜9-2 | ⚙ メニュー・使い方 | ✅ | ガイド・記事へのリンク、使い方の最後にガイドへのリンク |
| 9-3 | 状態の保存 | ✅ | IndexedDB に自動保存。「すべてクリア」で消去 |
| 9-4 | スマホ対応 | ✅ | |
| 9-5 | スマホで `accept` を外す | ✅ | 音声ファイル・プロジェクトの読み込み |
| 9-7 | 保存はダウンロード | ✅ | PC の Chrome・Edge は showSaveFilePicker、ほかは名前の入力欄のあとダウンロード |
| 9-8 | アクセシビリティ | ✅ | |
| 9-9 | 自動テスト | ⚠️ | Playwright のスクリプトで確認（リポジトリには入れていない） |
| 9-10〜9-12 | 押したときの反応・ダイアログのフォーカス・ステータスバー | ✅ | ヘッダーは sticky・不透明 |
| 9-13 | 大きなダウンロードの確認 | — | lamejs（約 150 KB）だけ |
| 10-1〜10-5 | 記事の生成・最初の記事・表の計算・画面写真・導線 | ✅ | 記事 6 本（guide・make-a-demo・chord-symbols・backing-patterns・recording-tips・faq）。パターン名・上限・コードの構成音はアプリから読む |
| 10-6 | スマホ幅の UX レビュー | ✅ | 390px で全ページ。横スクロールなし。ジャンル表はスマホでカード型に変更 |
| 10-7 | 記事の人間確認 | 👤 | 初版（#2）はマージ済み。シャッフル・エンディング・キーの変更（J・K・L）は `docs/article-review.md` |
| 10-8 | 再生成できる画面写真 | ✅ | `scripts/render-guide-images.mjs`（歌は架空のメロディを合成） |
| 10-9 | 専門家視点の校閲 | ✅ | `docs/article-review.md` の「Claude による校閲」 |
| 11-1〜11-3 | Web Analytics | ✅ | 全ページに beacon。404 にはなし |
| 11-4 | 本番で beacon を確認 | 👤 | |
| 12-1〜12-2 | Actions | ✅ | build-ja.yml・third-party-licenses.yml |
| 12-9 | 2 回目以降・日本語ページの E2E | ✅ | SW が制御する 2 回目の訪問、`/ja/` での録音・MP3 書き出し |
| 12-12 | 初回の Artifact | ✅ | 上の URL |
| 12-13 | 人間がやる動作確認の方法 | ✅ | PR 本文 |
| 13-1〜13-5 | 公開直前・公開時 | 👤 | |
| 14-1〜14-6 | 公開後（Search Console など） | 👤 | sitemap: `https://ktkwmr.com/demotrackmaker/sitemap.xml` |
| 15 | 収益化 | — | まだやらない |
