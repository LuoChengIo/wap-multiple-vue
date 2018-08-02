<template>
  <button
    class="vc-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'vc-button--' + type : '',
      {
        'is-disabled': buttonDisabled || loading,
        'is-loading': loading,
        'is-block':block,
        'is-round': round,
      }
    ]"
    :style="buttonStyles">
    <icon class="vm vc-icon-loading" :size="size" v-if="loading" value="autorenew"></icon>
    <icon class="vm" v-if="icon && !loading" :size="size" :value="icon"></icon>
    <span class="vm" v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import { hexToRgba } from '@/utils'
import icon from '@/components/icon'
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: Number,
    icon: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    block: Boolean
  },
  computed: {
    buttonStyles() {
      const style = {}
      if (this.size) style['font-size'] = this.buttonFSize
      if (this.color) style['color'] = this.color
      if (this.bgcolor) style['background'] = this.bgcolor
      if (this.bgcolor) style['box-shadow'] = `0px 0px 10px ${hexToRgba(this.bgcolor, 90).rgba}`
      return style
    },
    buttonFSize() { // 按钮字体px转化成vw
      return this.size / 750 * 100 + 'vw'
    },
    buttonDisabled() {
      return this.disabled
    }
  },
  components: {
    icon
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="postcss">
@import '@/styles/variables.css';
  .vc-button{
    position: relative;
    display: inline-block;
    margin: 0;
    padding:.55em .8em ;
    border-radius:.2em;
    white-space: nowrap;
    -webkit-appearance: none;
    outline: none;
    transition: .1s;
    font-weight: 500;
    -moz-user-svcect: none;
    -webkit-user-svcect: none;
    -ms-user-svcect: none;
    border:none;
    text-decoration: none;
    text-align: center;
    background:var(--button-linear-gradient-left-color) linear-gradient(to right , var(--button-linear-gradient-left-color),var(--button-linear-gradient-right-color));
    color: var(--button-base-color);
    cursor: pointer;
    font-size: var(--button-base-font-size);
    font-family: var(--button-base-font-family);
    box-shadow:var(--button-box-shadow);
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        /* background: color(var(--button-linear-gradient-left-color) alpha(50%)) linear-gradient(color(var(--button-linear-gradient-left-color) alpha(50%)),color(var(--button-linear-gradient-right-color) alpha(50%))); */
        pointer-events: none;
        cursor: not-allowed;
        opacity: .7;
      }
    }
    &.is-round{
      border-radius: 4em;
    }
    &.is-block{
      display: block;
      width: 100%;
    }  
  }
  /*交互与变色-加深效果*/
  /* .vc-button:active{
    background-image: linear-gradient(to top, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05));
  } */
  .vc-icon-loading{
    animation: rotating 2s linear infinite;
  }
  @keyframes rotating {
    from{
      transform:rotate(0deg)
    }
    to{
      transform:rotate(360deg)
    }
  }
</style>
