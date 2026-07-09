# MR. SATAN EPK landing page — v2

Updated static site package with:
- stronger hero
- more emphasis on socials/listen links
- recent photo-forward gallery
- black background with purple/green glow instead of abstract devil art
- downloadable approved PDF EPK
- Formspree booking form

## Upload checklist
Upload these files/folders to the root of the GitHub repo:
- index.html
- styles.css
- script.js
- .nojekyll
- assets/ (whole folder)
- README.md

If GitHub will not let you upload a whole folder at once:
1. upload the root files first
2. create `assets/README.md`
3. upload the asset files into the `assets` folder in smaller batches

## GitHub Pages
Settings → Pages → Deploy from a branch → `main` → `/root`


## v2.1 patch notes
- Fixed the banner image crop by changing the visual banner from `cover` to `contain`.
- Added CSS support for the Exquisite Corpse font.
- Important: the font file is not included in this package. Upload your font file to:
  `assets/exquisite-corpse.ttf`

If the file name is different, either rename it in GitHub or update the `@font-face` URL in `styles.css`.
