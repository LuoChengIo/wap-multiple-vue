<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view  class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  // dynamically set transition based on route change
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  },
  methods: {
  }
};
</script>

<style lang="postcss">
body,html,#app{
  height: 100%;
}
/* .slide-transition {
  transition-duration: .3s;
  width: 100%;
}

.slide-enter, .slide-leave {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
} */
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
