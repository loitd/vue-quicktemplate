# vue-quick-template
Vue.JS quick template with:
* Mobile-first designed components: Navbar, Sidebar, ... 
* Progressive Web Application (PWA) ready (see all capable of PWA compared to Natives: https://whatwebcando.today/), 
* Very detail comments about all things (Readable code)
* Intergrated with CircleCI, Codecov (with pre-running-configures)
* Full of pluggins available by default With additional pluggins beside common ones (`babel`, `webpack`)
    * `vue@cli` version 3.4
    * `vuex`, 
    * `vue-router`, 
    * `bootstrap-vue` for Bootstrap 4, 
    * `fontawesome` for FontAwesome 5, 
    * `sass-loader`, 
    * `chartjs`,  
All for quick and handy start with Vue  
## Status
[![Package Quality](https://npm.packagequality.com/shield/vue-quick-template.svg)](https://packagequality.com/#?package=vue-quick-template)
[![CircleCI](https://circleci.com/gh/loitd/vue-quicktemplate.svg?style=svg)](https://circleci.com/gh/loitd/vue-quicktemplate)
[![codecov](https://codecov.io/gh/loitd/vue-quicktemplate/branch/master/graph/badge.svg)](https://codecov.io/gh/loitd/vue-quicktemplate)
![](https://img.shields.io/npm/dt/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/dw/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/l/vue-quick-template.svg?style=flat)
![](https://img.shields.io/npm/v/vue-quick-template.svg?style=flat)
![](https://img.shields.io/node/v/vue-quick-template.svg?style=flat)
![](https://img.shields.io/github/last-commit/loitd/vue-quicktemplate.svg?style=flat)
* Local Demo:
```bash
npm install -g serve
cd vue-quicktemplate
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```
* Online Demo:  
    * https://vqt.surge.sh/#/

## Git related
To pull from github to local
```
git pull origin master --allow-unrelated-histories
```
## Project setup
```
vue create vbdash2
vue ui
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
