# Ng Material Bootstrap Template

[![GitHub contributors](https://img.shields.io/github/contributors/BalajiDany/ng-material-bootstrap-template.svg)](https://github.com/BalajiDany/ng-material-bootstrap-template/graphs/contributors)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/BalajiDany/ng-material-bootstrap-template/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/BalajiDany/ng-material-bootstrap-template.svg)](https://github.com/BalajiDany/ng-material-bootstrap-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/BalajiDany/ng-material-bootstrap-template.svg)](https://github.com/BalajiDany/ng-material-bootstrap-template/network)
[![GitHub stars](https://img.shields.io/github/stars/BalajiDany/ng-material-bootstrap-template.svg)](https://github.com/BalajiDany/ng-material-bootstrap-template/stargazers)

Confused about choosing between angular material UI or Bootstrap? <br>
Why can't we use both? :thinking:


## Angular Material UI + Bootstrap

In the conflict of bootstrap VS material, we understand that both have several incredible components. We combine the best features from both and build highly responsive and modern-looking web pages. :tada:

 With this approach, we will have the following features.

* Material styled-components [Angular Material UI]
* Powerful grid system [Bootstrap]
* Commonly used utility styles [Bootstrap]
* Component Development Kit [Angular Material UI]
* Theming [Angular Material UI]

**This Starter Template is inspired By Amadou Sall @ NG-DE 2019**<br>
For more refer : 
[Slide Deck](https://speakerdeck.com/ahasall/angular-material-or-bootstrap-stop-asking-the-question-at-ng-de-2019) | [youtube](https://www.youtube.com/watch?v=6MgOHuxz2Ow)


## Build With

List of majour libraries used in the template

- [Angular](https://angular.io)
- [Angular Material UI Components and CDK](https://material.angular.io)
- [RxJs](https://rxjs-dev.firebaseapp.com)
- ~~[Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)~~ (~~dev~~)
- [Source Map Explorer](https://github.com/danvk/source-map-explorer) (npx)
- [Transloco](https://ngneat.github.io/transloco/)
- [unDraw](https://undraw.co)
- [Angular Material Icon](https://fonts.google.com/icons)


## Current Features

- Production Build
  - Build Optimizer : `npm run pack`
  - Source Map Explorer : `npm run analyze`
  - Refer : [package.json](package.json)
- Diffrential Loading
  - Refer : [Differential builds](https://angular.io/guide/deployment#differential-loading)
- Internationalization
  - [Transloco](https://ngneat.github.io/transloco/) - (i18n) library for Angular
  - Default Configuration : [transloco-root.module](src/app/@core/transloco/transloco-root.module.ts)
  - Locales : [i18n](src/assets/i18n)
  - Except EN Locale, others are translated using [Filtrate](https://file-translate.com/en/app/json-translate)
- Bootstrap
  - [Grid](https://getbootstrap.com/docs/5.0/layout/grid/) - mobile-first flexbox grid
  - [Container](https://getbootstrap.com/docs/5.0/layout/containers/) - fundamental building block
  - [Utilities](https://getbootstrap.com/docs/5.0/utilities) - utility classes
  - [Reboot](https://getbootstrap.com/docs/5.0/content/reboot/) - ~~Simple Base Line~~  - Manually Forked (Some style affects Angular Material Components)
- Angular
  - [Material Theme](https://material.angular.io/guide/theming) - Default : [Deep Purple & Amber](src/styles/theming.scss)
  - [Typography](https://material.angular.io/guide/typography) - Default : [Roboto, "Helvetica Neue", sans-serif](src/styles/typography.scss)
- Error Pages
  - Added with Illustrations using [unDraw](https://undraw.co)
  - Endpoints
    - `error/500` - Server Error
    - `error/503` - Server Down
    - `error/403` - Access Denied
    - `error/404` or `any url, not resolved by router` - Page Not Found
- Services
  - [Locale Manager](./src/app/@core/services/locale-manager.service.ts)
    - Stores the selected language in LocalStorage.
    - Language can also be changed via URL Query Param  (For English : `hreflang=en`)
  - [Theme Manager](./src/app/@core/services/theme-manager.service.ts)
    - Stores the selected theme in LocalStorage.
    - Theme can also be changed via URL Query Param (For Dark Pink BlueGrey : `hreftheme=dark-pink-bluegrey`)
    - For default : `hreftheme=default`
  - [SEO Manager](./src/app/@core/services/seo-manager.service.ts)
    - Allows us to set the **title** and **description**
    - Initialy it uses `appName` and `appDescription` from `assets/i18n/*.json` as **title** and **description**
        - Title format will be `${pageName} | ${appName}` 
        - Refer : [seo-manage.service.ts](./src/app/@core/services/seo-manager.service.ts)
- Entry Pages
  - Blank Pages (Under Development)
  - EndPoints
    - `entry/login` - Login Page
    - `entry/register` - Registration page


## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Apache-2.0 License - Please have a look at the [LICENSE](LICENSE) for more details.

## Acknowledgements

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Filtrate](https://file-translate.com/en/app/json-translate)
* [unDraw](https://undraw.co)

[Back To Top](#ng-material-bootstrap-template)
