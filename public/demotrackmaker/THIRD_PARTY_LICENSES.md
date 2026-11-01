# Third-party licenses / サードパーティライセンス

Demo Track Maker itself is MIT licensed (© ktkwmr). It uses the following library, loaded from a CDN only when needed.
Demo Track Maker 本体は MIT ライセンスです（© ktkwmr）。次のライブラリを、必要なときだけ CDN から読み込んで使います。

## lamejs 1.2.1

- Used for: converting the mixdown to MP3 (loaded only when MP3 is chosen) / ミックスダウンを MP3 に変換する（MP3 を選んだときだけ読み込む）
- Loaded from: https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js (unmodified / 改変なし)
- Source: https://github.com/zhuker/lamejs
- License: LGPL-3.0 — https://www.gnu.org/licenses/lgpl-3.0.html
- lamejs is a JavaScript port of LAME (https://lame.sourceforge.io/), also LGPL.
  Because the library is loaded as a separate, unmodified file, you can replace it with your own build (change `LAME_URL` in `index.html`).
  ライブラリは改変していない別ファイルとして読み込むので、利用者が自分でビルドしたものに差し替えられます（`index.html` の `LAME_URL`）。
