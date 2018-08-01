import Vue from 'vue'
import App from './app.vue'
import '@/styles/index.css'
import hljs from 'highlight.js' // 引入JS
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.directive('highlight', function(el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
new Vue({
  el: '#app',
  render: h => h(App)
})
