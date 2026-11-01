# MiniMTR

A simple multitrack recorder that runs entirely in the browser (one HTML file).
ブラウザだけで動く、シンプルなマルチトラックレコーダー（HTML 1 ファイル）。

**Status / 状態:** prototype / 試作

## Features / 機能
- Record and overdub up to 8 tracks (punch-in replaces only the recorded range, one-step undo) / 最大 8 トラックの重ね録り（録った範囲だけ置き換え、1 回分の取り消し）
- Volume, pan, mute, solo; click track with count-in / 音量・定位・ミュート・ソロ、カウント付きクリック
- Import audio files into a track / 音声ファイルの読み込み
- Auto-save in the browser (IndexedDB) / ブラウザに自動保存
- **Export the project** as a zip (`project.json` + one 32-bit float WAV per track) and open it again later or on another device / **プロジェクトを zip に書き出し**、あとで・別の端末で読み込んで続きができる
- Save to a folder (Chrome / Edge on a computer) / フォルダに保存（PC の Chrome・Edge）
- Stereo mixdown WAV / ミックスダウン WAV
- Recording latency compensation (⚙) / 録音のずれ補正

## Privacy / プライバシー
Audio is processed only on your device. Nothing is sent to a server. / 音声は端末内だけで処理し、サーバーには送りません。

## Development / 開発
Open via a local server (not `file://`; the microphone and Service Worker need `http://localhost` or HTTPS).
`file://` ではなくローカルサーバーで開いてください。

```sh
npx wrangler dev   # after wrangler.jsonc is added / wrangler.jsonc を足したあと
# or
npx serve public   # → http://localhost:3000/minimtr/
```

Preview copy for a claude.ai Artifact: `node scripts/build-preview.mjs` → `.preview/index.html`

## License
MIT (to be added)
