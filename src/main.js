// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iView'
import 'iview/dist/styles/iview.css';
import '../static/css/global.css';
import VueResource from 'vue-resource'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(iView, {
  transfer: true,
  size: 'large',
  select: {
      arrow: 'md-arrow-dropdown',
      arrowSize: 20
  }
});
Vue.use(VueResource)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router,
  store,  //注册store(这可以把 store 的实例注入所有的子组件)
  components: { App },
  template: '<App/>'
})
