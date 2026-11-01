# MiniMTR

ブラウザだけで動く簡易マルチトラックレコーダー（HTML 1 ファイル）。録音・設定をローカルに書き出して、続きから再開できる。公開 URL（予定）: https://ktkwmr.com/minimtr/

## 状態
- 試作（プロト）。アプリ本体 `public/minimtr/index.html` だけを作った段階で、共通部分（§2〜§12 の大半）はまだ。
- 試作の Artifact: https://claude.ai/artifact/4nMf28C3KohMKsawGB1vNZ（`node scripts/build-preview.mjs` → `.preview/index.html` を公開）

## 共通ベースライン
- 独自機能以外の共通項目は ktkwmr/webapp-baseline（非公開）の WEBAPP_BASELINE.md に従う。
  セッションに無ければ add_repo（read。更新するときは push）で追加して読む。
- 各項目の状態は docs/baseline-status.md に記録する（共通部分を作るときに作成）。
- どのアプリにも当てはまる新しい作業・設定・落とし穴が出てきたら、作業の最後に
  ベースラインへの追記案を出す（ユーザーが了承したらベースラインのリポジトリに PR）。

## このアプリの値（仮。§0 の確認がまだ）
- アプリ名: MiniMTR / スラッグ: minimtr / ドメイン: ktkwmr.com / 言語: en（既定）+ ja（/ja/）
- 運営者: ktkwmr / 問い合わせ: GitHub Issues
- Cloudflare Web Analytics token: 未設定

## データの持ち方（このアプリ独自）
- 自動保存: IndexedDB `minimtr`（store `kv` の `project` = 設定、store `audio` = トラック id → `{ sr, chans: Float32Array[] }`、`kv` の `dirHandle` = フォルダ保存先）。
- 書き出し: zip（無圧縮）に `project.json`（`format: "minimtr-project"`, `version: 1`）と `tracks/NN-<名前>.wav`（32bit float、劣化なし）。
  フォーマットを変えるときは `version` を上げ、古い版も読めるようにする。
- フォルダに保存: File System Access API（PC の Chrome・Edge）。zip と同じ構成のファイルを直接書く。
- ミックスダウン: 16bit ステレオ WAV（OfflineAudioContext）。

## ルール
- 生成ファイル（public/minimtr/ja/index.html など）は編集しない（生成スクリプトを入れたら）。
- 外部ホストを足したら public/_headers の CSP と、プライバシーの説明（ポリシー・アプリ内・README）を同じ PR で直す。
- 作業はブランチ → PR → Cloudflare のプレビュービルド確認 → squash マージ。
