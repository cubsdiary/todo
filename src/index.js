import Vue from 'vue'
import App from './app.vue'
import './common/stylus/app.styl'
const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  rander: (h) => h(App)
}).$mount(root)
