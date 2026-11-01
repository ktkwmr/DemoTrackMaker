# Demo Track Maker

Make a demo of your song in the browser: type chords, get bass, piano and drums, then record vocals or instruments on top (one HTML file).
For song demos, practice / backing tracks and arrangement sketches — not a full recording studio; export WAV or MIDI to a DAW for detailed work.

ブラウザでデモ音源を作るアプリ（HTML 1 ファイル）。コードを入れるとベース・ピアノ・ドラムの伴奏ができ、その上に歌や楽器を重ねて録音できる。
曲のアイデアのデモ、練習用の伴奏、アレンジの下書き向け。本格的な録音スタジオ（DAW）の代わりではなく、細かい作業は WAV・MIDI に書き出して DAW で行う。

Planned URL / 公開予定: https://ktkwmr.com/demotrackmaker/

**Status / 状態:** ready for release (articles waiting for review) / 公開準備済み（記事は確認待ち）

## Features / 機能
- Record and overdub up to 8 tracks (punch-in replaces only the recorded range, one-step undo) / 最大 8 トラックの重ね録り（録った範囲だけ置き換え、1 回分の取り消し）
- Volume, pan, mute, solo; click track with count-in / 音量・定位・ミュート・ソロ、カウント付きクリック
- Import audio files into a track / 音声ファイルの読み込み
- Chord chart (one box per beat, or type `| C | G | Am | F G |`) with automatic bass, piano and drums: several patterns per part (pop / rock first), piano sounds, drum fills per bar / コード譜（1 拍 1 マス、テキスト入力も可）から、ベース・ピアノ・ドラムを自動で伴奏。パートごとのパターン、ピアノの音色、小節ごとのドラムのフィル
- Note-by-note editing for the whole pattern (chord-relative) or for one bar only / 1 音ずつの編集（パターン全体＝コードからの相対、またはその小節だけ）
- Automatic variation over 4/8-bar phrases (bass runs, piano anticipations and colour notes, drum crashes / ghost notes / lead-ins) and an ending / 4・8 小節のまとまりに合わせた自動のバリエーション（ベースの駆け上がり、ピアノの先取りと色づけ、ドラムのクラッシュ・ゴースト・つなぎ）とエンディング
- Zoomable timeline (pinch, Ctrl + wheel, drag to scroll, follows the playhead); move bars in the chord chart by drag or long-press / タイムラインの拡大縮小（ピンチ・Ctrl＋ホイール、ドラッグで移動、再生位置に追従）、コード譜の小節をドラッグ・長押しで移動
- 8 bass sounds, 5 piano sounds, 6 drum kits (standard, rock, brushes, 808, 909, lo-fi) with clap, tambourine, shaker and cowbell / ベース 8 音色、ピアノ 5 音色、ドラム 6 セット（クラップ・タンバリン・シェイカー・カウベル入り）
- Effects on every track and part: EQ, compressor, drive, sends to a shared reverb and tempo-synced delay, presets / トラックとパートごとのエフェクト（EQ・コンプ・歪み、共通のリバーブとテンポ同期のディレイへの送り、プリセット）
- 4/4 and 3/4 / 拍子は 4/4 と 3/4
- Export the backing as a Standard MIDI File (tempo, time signature, chord markers, GM sounds) / 伴奏を標準 MIDI ファイルで書き出し（テンポ・拍子・コード名のマーカー、GM の音色番号）
- Render the backing (or one part) to an audio track / 伴奏（またはパート 1 つ）を音声トラックに書き出し
- Auto-save in the browser (IndexedDB) / ブラウザに自動保存
- **Export the project** as a zip (`project.json` + one 32-bit float WAV per track) and open it again later or on another device / **プロジェクトを zip に書き出し**、あとで・別の端末で読み込んで続きができる
- Stereo mixdown as WAV or MP3 / ミックスダウン（WAV か MP3）
- Recording latency compensation (⚙) / 録音のずれ補正

## Privacy / プライバシー
Audio is processed only on your device. Nothing is sent to a server. Page views are counted with Cloudflare Web Analytics (no cookies). Only when MP3 is chosen for a mixdown, the MP3 encoder (lamejs) is downloaded once from jsDelivr (cdn.jsdelivr.net). / 音声は端末内だけで処理し、サーバーには送りません。ページの閲覧数は Cloudflare Web Analytics（Cookie なし）で数えます。ミックスダウンで MP3 を選んだときだけ、MP3 変換の部品（lamejs）を jsDelivr から 1 回読み込みます。

Full policy / 詳細: https://ktkwmr.com/demotrackmaker/privacy/

## Structure / 構成
```
public/
  _headers  404.html                 # security headers (CSP), not-found page
  demotrackmaker/
    index.html                       # the app (HTML/CSS/JS in one file, English + Japanese text) — edit this
    ja/index.html                    # generated (Japanese page)
    <article>/index.html, ja/<article>/index.html, sitemap.xml   # generated (guides, privacy, about)
    sw.js  manifest.json  icons/  og-image.png  images/guide/  THIRD_PARTY_LICENSES.md
scripts/
  build-ja.mjs  build-pages.mjs  pages/*.mjs   # generators (articles are in scripts/pages/<slug>.mjs)
  render-guide-images.mjs  render-icons.mjs  render-og-image.mjs  og-image.html  update-third-party-licenses.mjs  build-preview.mjs
.github/workflows/                   # regenerate pages / third-party licenses on push to main
```
Generated files are not edited by hand: run `node scripts/build-ja.mjs` and `node scripts/build-pages.mjs` (`--check` to verify). They also run before `wrangler dev` / deploy and in GitHub Actions.
生成ファイルは手で編集しません（上のスクリプトで作り直す。`wrangler dev`・デプロイ・GitHub Actions でも自動で走る）。

## Development / 開発
Open via a local server (not `file://`; the microphone, IndexedDB and the Service Worker need `http://localhost` or HTTPS).
`file://` ではなくローカルサーバーで開いてください。古い画面が出るときは再読み込みしてください（Service Worker）。

```sh
npx wrangler dev   # → http://localhost:8787/demotrackmaker/  (Windows PowerShell: npx.cmd wrangler dev)
```

Screenshots, icons and the share image (Playwright): `node scripts/render-guide-images.mjs`, `node scripts/render-icons.mjs`, `node scripts/render-og-image.mjs`.
Preview copy for a claude.ai Artifact: `node scripts/build-preview.mjs` → `.preview/index.html`

## Deploy / デプロイ
Cloudflare Workers static assets (Workers Builds): every push to `main` deploys. The Worker `demotrackmaker` only serves `ktkwmr.com/demotrackmaker*`; the domain root belongs to `ktkwmr/ktkwmr.com`.
Cloudflare Workers の静的アセット。`main` への push で自動デプロイ。

## License
MIT © 2026 ktkwmr (`LICENSE`). Third-party: `public/demotrackmaker/THIRD_PARTY_LICENSES.md` (lamejs, LGPL-3.0).
