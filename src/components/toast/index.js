import DcToast from './src/toast'

/* istanbul ignore next */
DcToast.install = function(Vue) {
  Vue.prototype.$toast = DcToast
}

export default DcToast
