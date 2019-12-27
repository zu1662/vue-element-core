import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import VueStorage from 'vue-ls'
import { storageOptions } from '@/config/defaultSetting'

// mock
import './mock'

import '@/styles/index.less' // global css

// permission
import './router/permission' // permission control
import PerssionPlugin from '@/utils/permission' // page button permission

// base lib
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// custom components
import '@/icons'
import { AxiosPlugin } from '@/utils/request'
import '@/directives/waves'

Vue.config.productionTip = false

Vue.use(PerssionPlugin)
Vue.use(ElementUI)
Vue.use(VueStorage, storageOptions)
Vue.use(AxiosPlugin)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
