<template>
  <span class="icon" :class="classNames" :style="{'font-size': size + 'px'}"><slot></slot></span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    classNames() {
      const obj = {}
      obj['icon-' + this.value] = true
      return obj
    }
  }
}
</script>

<style lang="postcss">
@import "../../../fonts/style.css";
.icon{
  position: relative;
}
</style>
