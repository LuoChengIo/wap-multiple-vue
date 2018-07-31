<template>
  <div class="vc-button" :class="buttonClass" :style="{'font-size':buttonFSize+'vw'}">
    <slot>
      <icon class="vm" v-if="icon" :size="size" :value="icon"></icon>
      <span class="vc-button-text vm" v-if="text">{{text}}</span>
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
      default: 36
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
        'vc-button-block': this.block
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
  .vc-button{
    position: relative;
    display: inline-block;
    margin: 0;
    padding:.55em .8em;
    border-radius:.2em;
    text-decoration: none;
    text-align: center;
    background:#6080F2 linear-gradient(#6080F2,#4555E9);
    color: #fff;
    cursor: pointer;
  }
  /* 交互与变色-加深效果
  .vc-button:active,
  .vc-button:hover {
    background-image: -webkit-linear-gradient(to top, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05));
    background-image: linear-gradient(to top, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05));
  } */
  .icon{
  }
  .vc-button-text{
    line-height: 1;
  }
  .vc-button-block{
    display: block;
  }
</style>
