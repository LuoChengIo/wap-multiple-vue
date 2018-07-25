import Vue from 'vue'
import App from './app.vue'
import router from './router'
import '@/styles/index.css'

import DcToast from '@/components/toast'

// 加载组件
Vue.use(DcToast)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
