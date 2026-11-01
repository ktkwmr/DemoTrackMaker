# MiniMTR

A simple multitrack recorder that runs entirely in the browser (one HTML file).
ブラウザだけで動く、シンプルなマルチトラックレコーダー（HTML 1 ファイル）。

**Status / 状態:** prototype / 試作

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
- Stereo mixdown WAV / ミックスダウン WAV
- Recording latency compensation (⚙) / 録音のずれ補正

## Privacy / プライバシー
Audio is processed only on your device. Nothing is sent to a server. / 音声は端末内だけで処理し、サーバーには送りません。

## Development / 開発
Open via a local server (not `file://`; the microphone and Service Worker need `http://localhost` or HTTPS).
`file://` ではなくローカルサーバーで開いてください。

```sh
npx wrangler dev   # → http://localhost:8787/minimtr/  (Windows PowerShell: npx.cmd wrangler dev)
```

Preview copy for a claude.ai Artifact: `node scripts/build-preview.mjs` → `.preview/index.html`

## License
MIT (to be added)
