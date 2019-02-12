# vue-quicktemplate
Vue.JS quick template with:
* Mobile-first designed components: Navbar, Sidebar, ... 
* Progressive Web Application (PWA) ready, 
* Very detail comments about all things (Readable code)
* Full of pluggins available by default With additional pluggins beside common ones (`babel`, `webpack`)
    * `vuex`, 
    * `vue-router`, 
    * `bootstrap-vue` for Bootstrap 4, 
    * `fontawesome` for FontAwesome 5, 
    * `sass-loader`, 
    * ... 
All for quick and handy start with Vue 
Local Demo:
```bash
npm install -g serve
cd vue-quicktemplate
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```
Online Demo:  
* https://vqt.surge.sh/#/

## git related
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
