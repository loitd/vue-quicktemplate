import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// el is a selector string or HTML element to an existing DOM element. The app will mount to this element. In our example, we passed in a selector string of #app
// In this case, #app is mounted instead of specify el
