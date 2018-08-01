import Vue from 'vue'
import App from './app.vue'
import router from './router'
import '@/styles/index.css'

import VcToast from '@/components/toast'
import hljs from 'highlight.js' // 引入JS
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
// 加载组件
Vue.use(VcToast)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
