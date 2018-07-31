<template>
  <span class="icon" :class="classNames" :style="{'font-size': iconFSize + 'vw'}"><slot></slot></span>
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
    },
    iconFSize() {
      return this.size / 750 * 100
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
