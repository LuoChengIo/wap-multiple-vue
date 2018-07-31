<template>
  <transition name="toast-fade">
    <div class="vc-toast" v-show="visible">
      <span class="vc-toast-text" v-html="message"></span>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'VcToast',
    data() {
      return {
        visible: false,
        message: '',
        duration: 3000,
        closed: false,
        onClose: null,
        type: 'info'
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false
          // 关闭时销毁实例
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    computed: {
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      close() {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      clearTimer() {
        clearTimeout(this.timer)
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    },
    mounted() {
      this.startTimer()
    },
    beforeDestroy() {
    }
  }
</script>
<style lang="postcss" scoped>
  .vc-toast{
    position: fixed;
    left: 50%;
    top: 50%;
    max-width: 80%;
    padding:1em 2em;
    font-size: 28px;
    border-radius:.1em;
    background: rgba(0, 0, 0, 1);
    color: #fff;
    text-align: center;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
  .vc-toast-text{
    display: block;
    text-align: center;
  }
  
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.toast-fade-enter-active {
  transition: all .3s ease;
}
.toast-fade-leave-active {
  transition: all .1s ease;
}
.toast-fade-enter, .toast-fade-leave-to
/* .toast-fade-leave-active for below version 2.1.8 */ {
  transform: translate(-50%,-30%);
  opacity: 0;
}
</style>
