# vue-quick-template
Vue.JS quick template with all for quick and handy start:
* Mobile-first designed components/pages: Login, Simple CRUD, Navbar, Sidebar, ... 
* Progressive Web Application (PWA) ready (see all capable of PWA compared to Natives: https://whatwebcando.today/), 
* Very detail comments about all things (Readable code)
* Preconfigured intergration with `CircleCI`, `Codecov`, `Travis-CI` (with pre-running-configures)
* Preconfigured scripts to deploy on `github.io` and `surge.sh`
* Full of pluggins available by default With additional pluggins beside common ones (`babel`, `webpack`)
    * `vue@cli` version 3.4
    * `vuex`, 
    * `vue-router`, 
    * `@babel/preset-env` (version 7) fixed some troubles from default preset 6 or preset 2015
    * `bootstrap-vue` for Bootstrap 4, 
    * preconfigued `fontawesome` for FontAwesome 5,
    * `octicons` replacement fro FontAwesome 5 for a lightweight product 
    * `sass-loader`, 
    * `chartjs`,  
    * Unit test with `jest`, E2E test with `nightwatch`,

## Status
[![Package Quality](https://npm.packagequality.com/shield/vue-quick-template.svg)](https://packagequality.com/#?package=vue-quick-template)
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
* Use Guide

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
    * https://vqt.surge.sh/
    * https://loitd.github.io/vue-quick-template/

## Git related
To pull from github to local
```
git pull origin master --allow-unrelated-histories
```
## Project setup
```
yarn install
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
