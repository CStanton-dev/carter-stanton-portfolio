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

<h2>Screenshots</h2>
<p>
  <img src="https://picsum.photos/536/354" alt="Test Image"/>
</p>

## File Structure

```shell
carter-stanton-portfolio/
├── .github/
│   └── workflows/
│       └── jobDetailAndStatus.yml
├── .vscode/
│   └── settings.json
├── src/
│   ├── components/
│   │   ├── About/
│   │   |   ├── About.tsx
│   │   |   └── index.ts
│   │   ├── Col/
│   │   |   ├── Col.module.scss
│   │   |   ├── Col.tsx
│   │   |   └── index.ts
│   │   ├── Contact/
│   │   |   ├── alex-holyoake-113856.jpg
│   │   |   ├── Contact.module.scss
│   │   |   ├── Contact.tsx
│   │   |   └── index.ts
│   │   ├── Container/
│   │   |   ├── Container.module.scss
│   │   |   ├── Container.tsx
│   │   |   └── index.ts
│   │   ├── Footer/
│   │   |   ├── Footer.module.scss
│   │   |   ├── Footer.tsx
│   │   |   └── index.ts
│   │   ├── FullScreenSection/
│   │   |   ├── FullScreenSection.module.scss
│   │   |   ├── FullScreenSection.tsx
│   │   |   └── index.ts
│   │   ├── Intro/
│   │   |   ├── Intro.module.scss
│   │   |   ├── Intro.tsx
│   │   |   ├── index.ts
│   │   |   └── pexels-kevin-ku-577585.jpg
│   │   ├── Masthead/
│   │   |   ├── MastheadNavLink/
|   │   │   |   ├── index.ts
|   │   │   |   ├── MastheadNavLink.module.scss
|   │   │   |   └── MastheadNavLink.tsx
│   │   |   ├── index.ts
│   │   |   ├── Masthead.module.scss
│   │   |   └── Masthead.tsx
│   │   ├── Portfolio/
│   │   |   ├── centervilleBarbers.png
│   │   |   ├── imperiumPopuli.png
│   │   |   ├── index.ts
│   │   |   ├── Portfolio.module.scss
│   │   |   ├── Portfolio.tsx
│   │   |   └── reactCode.png
│   │   └── Row/
│   │       ├── index.ts
│   │       ├── Row.module.scss
│   │       └── Row.tsx
│   ├── layouts/
│   │   └── index.ts
│   ├── pages/
│   │   ├── 404.tsx
│   │   └── index.ts
│   ├── styles/
│   |   ├── _base.scss
│   |   ├── _code.scss
│   |   ├── _mixins.scss
│   |   ├── _typography.scss
│   |   ├── _variables.scss
│   |   └── globals.scss
|   ├── html.tsx
|   └── typings.d.ts
├── static/
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── image-og.png
│   └── site.webmanifest
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .prettierrc
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── now.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Thanks

This project was built with the help of <a href="https://www.gatsbyjs.com">Gatsby.js</a> and is used under the <a href="https://github.com/CStanton-dev/carter-stanton-portfolio/blob/main/LICENSE">MIT License</a><br /><br />
