<h1 align="center">
  <br />Carter Stanton Portfolio
</h1>
<p align="center">
  <a href="https://github.com/CStanton-dev/carter-stanton-portfolio/actions/workflows/jobDetailAndStatus.yml">
    <img src="https://github.com/CStanton-dev/carter-stanton-portfolio/actions/workflows/jobDetailAndStatus.yml/badge.svg?style=flat" alt="Job Detail and Status">
  </a>
  <a href="https://github.com/CStanton-dev/carter-stanton-portfolio/blob/main/LICENSE">
    <img alt="This Repo is released under the MIT license." src="https://img.shields.io/github/license/cstanton-dev/carter-stanton-portfolio?style=flat" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style">
  </a>
</p>

## Table of Contents

- [Release Notes](#-release-notes)
- [Screenshots](#-screenshots)
- [File Structure](#-file-structure)
- [Thanks to Our Contributors](#-thanks)

## Release Notes

- ### v2.0.0
  - This release sees the refactor of the existing code to use the Gatsby.js framework
    - The Gatsby.js framework allows site content to be loaded at ludicious speeds
  - This release also sees small additions and changes to the code
    - Several additions to Credentials and the About sections of the website
    - A small change to include an "Alt" attribute to a "img" HTML tag to follow best practices
- ### v1.0.0
  - This is the initial release of the repository. All future versions and changes will stem from this release.

## Screenshots

## File Structure

```shell
carter-stanton-portfolio/
├── .github/
│   └── workflows/
│       └── jobDetailAndStatus.yml
├── src/
│   ├── fonts/
│   │   ├── OpenSans-VariableFont_wdth,wght
│   │   └── Rubik-Italic-VariableFont_wght
│   ├── pages/
│   │   ├── index.js
│   │   └── 404.js
│   └── styles/                                # Import all ‘-dir.scss’ files
│       ├── abstracts/
│       |   ├── __abstracts-dir.scss           # Import all abstracts .scss files
│       |   ├── _fonts.scss                    # Font Import
│       |   ├── _mixins.scss                   # Scss Mixins
│       |   └── _variables.scss                # Scss Variables
│       ├── base/
│       |   ├── __base-dir.scss                # Import all base .scss files
│       |   ├── _reset.scss                    # Custom Reset/Normalize
│       |   ├── _typography.scss               # Typography Rules
│       ├── components/
│       |   ├── __components-dir.scss          # Import all componenets .scss files
│       |   ├── _column.scss                   # Column Styles
│       |   ├── _container.scss                # Container Styles
│       |   ├── _row.scss                      # Row Styles
│       |   ├── _scrollbar.scss                # Scrollbar Styles
│       |   └── _sections.scss                 # Sections Styles
│       ├── layouts/
│       |   ├── __layouts-dir.scss             # Import all layouts .scss files
│       |   ├── _introduction.scss             # Introduction Styles
│       |   ├── _main-navigation.scss          # Main Navigation Styles
│       |   └── _portfolio.scss                # Portfolio Styles
│       ├── vendor/
│       |   ├── __vendor-dir.scss              # Import Vendor folders
│       |   └── normalize/                     # Normalize
│       └── style.scss
├── static/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
|   ├── centervilleBarbers.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── image-og.png
|   ├── imperiumPopuli.png
|   ├── pexels-kevin-ku-577585.png
|   ├── reactCode.png
│   └── site.webmanifest
├── .gitignore
├── gatsby-config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Thanks

This project was built with the help of <a href="https://www.gatsbyjs.com">Gatsby.js</a> and is used under the <a href="https://github.com/CStanton-dev/carter-stanton-portfolio/blob/main/LICENSE">MIT License</a>
