<template>
  <div class="dc-button" :class="buttonClass" :style="{'font-size':buttonFSize+'vw'}">
    <slot>
      <icon class="vm" v-if="icon" :value="icon"></icon>
      <span class="dc-button-text vm" v-if="text">{{text}}</span>
    </slot>
  </div>
</template>

<script>
import icon from '@/components/icon'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 28
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass() {
      const style = {
        'dc-button-block': this.block
      }
      if (this.color) style['color-' + this.color] = true
      return style
    },
    buttonFSize() {
      return this.size / 750 * 100
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss">
  .dc-button{
    position: relative;
    display: inline-block;
    margin: 0;
    padding:.3em .8em;
    border-radius:.2em;
    text-decoration: none;
    text-align: center;
    background:#58a linear-gradient(#77a0bb,#58a);
    color: #fff;
  }
  .icon{
  }

  .dc-button-text{
    line-height: 1;
  }
  .dc-button-block{
    display: block;
  }
</style>
