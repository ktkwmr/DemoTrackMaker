# Demo Track Maker

ブラウザでデモ音源を作るアプリ（HTML 1 ファイル）。コード譜から自動で伴奏を作り、歌や楽器を重ねて録音する。プロジェクトをローカルに書き出して続きから再開できる。公開 URL（予定）: https://ktkwmr.com/demotrackmaker/

位置づけ: 「デモ音源・練習用の伴奏・アレンジの下書き」の道具として紹介する。一般的な MTR・DAW の代わりとはうたわない（細かい編集・ミックスは WAV・MIDI に書き出して DAW で）。
2026-11 に MiniMTR から改名（スラッグも minimtr → demotrackmaker）。旧名の自動保存・zip の引き継ぎはしない（公開前のため）。GitHub のリポジトリ名 `ktkwmr/MiniMTR` の変更は 👤 の作業。

## 状態
- 試作（プロト）。アプリ本体 `public/demotrackmaker/index.html` だけを作った段階で、共通部分（§2〜§12 の大半）はまだ。
- 試作の Artifact: https://claude.ai/artifact/4nMf28C3KohMKsawGB1vNZ（`node scripts/build-preview.mjs` → `.preview/index.html` を公開）

## 共通ベースライン
- 独自機能以外の共通項目は ktkwmr/webapp-baseline（非公開）の WEBAPP_BASELINE.md に従う。
  セッションに無ければ add_repo（read。更新するときは push）で追加して読む。
- 各項目の状態は docs/baseline-status.md に記録する（共通部分を作るときに作成）。
- どのアプリにも当てはまる新しい作業・設定・落とし穴が出てきたら、作業の最後に
  ベースラインへの追記案を出す（ユーザーが了承したらベースラインのリポジトリに PR）。

## このアプリの値（仮。§0 の確認がまだ）
- アプリ名: Demo Track Maker / スラッグ: demotrackmaker / ドメイン: ktkwmr.com / 言語: en（既定）+ ja（/ja/）
- 運営者: ktkwmr / 問い合わせ: GitHub Issues
- Cloudflare Web Analytics token: 未設定

## データの持ち方（このアプリ独自）
- 自動保存: IndexedDB `demotrackmaker`（store `kv` の `project` = 設定、store `audio` = トラック id → `{ sr, chans: Float32Array[] }`）。
- 書き出し: zip（無圧縮）に `project.json`（`format: "demotrackmaker-project"`, `version: 1`）と `tracks/NN-<名前>.wav`（32bit float、劣化なし）。
  フォーマットを変えるときは `version` を上げ、古い版も読めるようにする（改名時に version 1 からやり直した。`song`・`fx` が無いファイルも既定値で読めるようにしてある）。
- 伴奏（`state.song`、project.json の `song`）: `chords[小節][拍]`（空文字 = 前のコードが続く）、`parts.bass/piano/drums`
  （`preset`・`tone`（ドラムは音色セット）・`custom` = パターン全体の編集・`overrides[小節]` = その小節だけの編集・ドラムは `fills[小節]`・`fillCustom`・`crash`）。
  時間は 1 拍 = 12 tick。パターンの音の高さはコードからの相対（`deg` R/3/5/7/9、`semi`、`vi` = ピアノ右手の和音の何番目か、`rh` = 右手の音域で基本形の和音の音（分散和音用）、`ap` = 次のコードへの半音アプローチ）、
  小節だけの編集は絶対音高（`midi`）。自動のバリエーション（`variation` 0〜1、`seed`、`ending`）は renderBar の最後で重ねる（`varyBar`）。
  小節ごとに seed から決まる疑似乱数なので、再生・表示・MIDI・書き出しで同じ結果になる。パターン全体の編集画面はバリエーションを含まない元のパターン、「この小節だけ」は聞こえている音（バリエーション込み）をコピーする。音源はすべて Web Audio の合成（外部の音源ファイルなし）。拍子は 4/4 と 3/4 のみ。
- エフェクト: トラックの `fx` と `song.parts.*.fx`（`low`/`mid`/`high` dB・`mf` Hz・`comp`/`drive`/`rev`/`dly` 0〜1）、共通の `fx`（`revLen` 秒・`dlyNote`・`dlyFb`）。
  チャンネルは input → EQ → 歪み → コンプ → 音量 → 定位、音量のあとから共通のリバーブ（合成したインパルス応答）とテンポ同期のディレイへ送る（`makeStrip`・`makeFxBus`）。ミックスダウンと書き出しも同じ構成（`renderMix`）。
- 「フォルダに保存」は zip の書き出しと用途が重なるので削除した（どの端末でも使える zip に一本化）。
- 書き出すファイルの名前: `exportFile`。PC の Chrome・Edge は showSaveFilePicker（名前と保存先）、それ以外はページ内の名前の入力欄のあと通常のダウンロード。初期値は zip がプロジェクト名、ミックスダウンは「-mix」、MIDI は「-backing」、トラックは「-トラック名」を付ける。
- ミックスダウン: 16bit ステレオ WAV（OfflineAudioContext）。
- 伴奏の MIDI: SMF type 1、480 PPQ。トラック 0 = テンポ・拍子・コード名（マーカー）、ベース ch1・ピアノ ch2・ドラム ch10（GM ドラムマップ、音色セットは GS/XG のドラムキット番号をプログラムチェンジで）。グリッドどおり（ハネは反映、揺らぎは入れない）。
- 伴奏を音声トラックに: パート 1 つなら音量・定位をかけずに書き出し、新しいトラックの音量・定位に移す。全部なら音量・定位・ミュート・ソロを反映して 1 本に。書き出したパートはミュートする。

## ルール
- 生成ファイル（public/demotrackmaker/ja/index.html など）は編集しない（生成スクリプトを入れたら）。
- 外部ホストを足したら public/_headers の CSP と、プライバシーの説明（ポリシー・アプリ内・README）を同じ PR で直す。
- 作業はブランチ → PR → Cloudflare のプレビュービルド確認 → squash マージ。
