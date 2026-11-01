# Third-Party Software Notices

Demo Track Maker

This application uses the following third-party software.
The app's own code (recording, the backing parts, the synthesized sounds, and the effects) is plain HTML, CSS, and JavaScript.
lamejs is loaded unmodified, as a separate file from a CDN, only when a mixdown is saved as MP3.

------------------------------------------------------------------------

### lamejs
- Package: lamejs
- Purpose: Pure JavaScript MP3 Encoder
- License: LGPL-3.0
- Source: https://github.com/zhuker/lamejs
- Based on: LAME (https://lame.sourceforge.io/), LGPL
- Full license text (LGPL-3.0): https://www.gnu.org/licenses/lgpl-3.0.html
- Use: converts the mixdown to MP3 (loaded only when MP3 is chosen; unmodified; can be replaced via LAME_URL in index.html)
- License text:

    Can I use LAME in my commercial program?  

    Yes, you can, under the restrictions of the LGPL.  The easiest
    way to do this is to:

    1. Link to LAME as separate jar (lame.min.js or lame.all.js)

    2. Fully acknowledge that you are using LAME, and give a link
       to our web site, lame.sourceforge.net

    3. If you make modifications to LAME, you *must* release these
       these modifications back to the LAME project, under the LGPL.

<!-- New libraries are added above this line by scripts/update-third-party-licenses.mjs -->
