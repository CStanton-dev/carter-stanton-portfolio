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
│   ├── styles/                            # Import all ‘-dir.scss’ files
│   │   ├── abstracts/
│   │   |   ├── __abstracts-dir.scss       # Import all abstracts .scss files
│   │   |   ├── _fonts.scss                # Font Import
│   │   |   ├── _mixins.scss               # Scss Mixins
│   │   |   └── _variables.scss            # Scss Variables
│   │   ├── base/
│   │   |   ├── __base-dir.scss            # Import all base .scss files
│   │   |   ├── _typography.scss           # Typography Rules
|   |   |   …                              # Etc.
│   │   ├── components/
│   │   |   ├── __components-dir.scss      # Import all componenets .scss files
│   │   |   ├── _button.scss               # Button Styles
│   │   |   ├── _input.scss                # Input Styles
|   |   |   …                              # Etc.
│   │   ├── layouts/
│   │   |   ├── __layouts-dir.scss         # Import all layouts .scss files
│   │   |   ├── _footer.scss               # Footer Styles
│   │   |   ├── _main-navigation.scss      # Main Navigation Styles
|   |   |   …                              # Etc.
│   │   ├── vendor/
│   │   |   └── __vendor-dir.scss          # Import Vendors
│   │   └── style.scss
│   └── pages/
│       ├── index.js
│       └── 404.js
├── static/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── person.png
├── .gitignore
├── gatsby-config.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Thanks

This project was built with the help of <a href="https://www.gatsbyjs.com">Gatsby.js</a> and is used under the <a href="https://github.com/CStanton-dev/carter-stanton-portfolio/blob/main/LICENSE">MIT License</a>
