# vue-quick-template
Vue.JS quick template with all for quick and handy start:
* Mobile-first designed components/pages
* 7 common components 
* Progressive Web Application (PWA) ready (see all capable of PWA compared to Natives: https://whatwebcando.today/), 
* Very detail comments about all things (Readable code)
* Preconfigured intergration with `CircleCI`, `Codecov`, `Travis-CI` (with pre-running-configures). Right now this repo is using Travis but Circle CI is also preconfigured.
* Preconfigured scripts to deploy on `github.io` and `surge.sh`. Modified register service to fix error: `The path of the provided scope ('/') is not under the max scope allowed ('/vue-quick-template/'). Adjust the scope, move the Service Worker script, or use the Service-Worker-Allowed HTTP header to allow the scope.` for domains like: `loitd.github.io/vue-quick-template` to make sure register service worker successfully.
* Social authentication with Google (`vue-all-oauth`) and Google integrated ready (as of Mar 2019)
* Full of pluggins available by default With additional pluggins beside common ones:
    * `@babel/core` lastest 7.3.3 instead of old default `babel-core` version 7.0.0-bridge.0
    * `vue@cli` v3.4
    * `vuex` v3.0.1
    * `vue-router` v3.0.1 
    * `@babel/preset-env` (version 7) fixed some troubles from default preset 6 or preset 2015
    * `bootstrap-vue` for Bootstrap 4, 
    * preconfigued `fontawesome` for FontAwesome 5,
    * `sass-loader` and `node-sass` for scss pre-processing
    * `chartjs`, `vue-chartjs` interated ready 
    * Unit test with `jest` with test coverage, E2E test with `nightwatch`,

## Status
[![Package Quality](https://npm.packagequality.com/shield/vue-quick-template.svg)](https://packagequality.com/#?package=vue-quick-template)
[![Build Status](https://travis-ci.org/loitd/vue-quick-template.svg?branch=master)](https://travis-ci.org/loitd/vue-quick-template)
[![CircleCI](https://circleci.com/gh/loitd/vue-quick-template.svg?style=svg)](https://circleci.com/gh/loitd/vue-quick-template)
[![codecov](https://codecov.io/gh/loitd/vue-quick-template/branch/master/graph/badge.svg)](https://codecov.io/gh/loitd/vue-quick-template)
![](https://img.shields.io/npm/dt/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/dw/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/l/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/v/vue-quick-template.svg?style=flat)
![](https://img.shields.io/node/v/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/last-commit/loitd/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/collaborators/vue-quick-template.svg?style=flat)
![](https://img.shields.io/maintenance/yes/2019.svg?style=flat)
![](https://img.shields.io/librariesio/dependents/npm/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/issues/loitd/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/issues-closed/loitd/vue-quick-template.svg?style=flat)
![](https://img.shields.io/librariesio/release/npm/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/languages/top/loitd/vue-quick-template.svg?style=flat)
![](https://img.shields.io/snyk/vulnerabilities/npm/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/repo-size/loitd/vue-quick-template.svg?style=flat)
## Use Guide
### Bootstrap-vue
* Add new demanded component into `src/plugins/bootstrap-vue.js`
* Using components as described in this document: ![Bootstrap-vue documents](https://bootstrap-vue.js.org/docs/components/alert)
### Octicons
* Add/remove and reconfigure Octicons in `src/plugins/octicons.js`
* 
## Demos
* Local Demo:
```bash
git clone https://github.com/loitd/vue-quick-template
npm install -g serve
cd vue-quick-template
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```
* Online Demo:  
    * https://loitd.github.io/vue-quick-template/

## Git related
To pull from github to local
```
git pull origin master --allow-unrelated-histories
```
## Project setup (install global packages with npm make you dont have to add yarn to PATH)
```
npm install yarn
npm install -g @vue/cli
yarn install
```
### Configure PUBLICPATH if need in vue.config.js
```
publicPath: process.env.NODE_ENV === "production" ? "/vue-quick-template/" : "/",
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Run Vue UI
```
vue ui
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

## Author
<a href="https://sourcerer.io/loitd"><img src="https://avatars2.githubusercontent.com/u/444086?v=4" height="50px" width="50px" alt=""/></a>
<a  href="https://sourcerer.io/loitd"><img  src="https://img.shields.io/badge/JavaScript-11%20commits-orange.svg"  alt=""></a>
<a href="https://sourcerer.io/loitd"><img src="https://img.shields.io/badge/Python-1%20commits-orange.svg" alt=""></a>
<a href="https://sourcerer.io/loitd"><img src="https://img.shields.io/badge/CSS-11%20commits-orange.svg" alt=""></a>
<a href="https://sourcerer.io/loitd"><img src="https://img.shields.io/badge/PHP-13%20commits-orange.svg" alt=""></a>
<a href="https://sourcerer.io/loitd"><img src="https://img.shields.io/badge/Shell-1%20commits-orange.svg" alt=""></a>

## License
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)