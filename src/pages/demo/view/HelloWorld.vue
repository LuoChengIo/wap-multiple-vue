<template>
  <div class="hello">
    <h1 >{{ msg }}</h1>
    <icon class="vm" value="account_box"></icon>
    <vc-button class="vm" @click.native="goOtherPage" text="去另外一个页面"></vc-button>
    <br>
    <vc-button class="vm" block icon="account_box" v-waves @click.native="showToast" :size="36" text="提示"></vc-button>
  </div>
</template>

<script>
import icon from '@/components/icon'
import VcButton from '@/components/button'
import waves from '@/directives/waves'
export default {
  name: 'HelloWorld',
  directives: {
    waves
  },
  components: {
    icon,
    VcButton
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goOtherPage() {
      this.$router.push({ path: '/fisrtPage/wdsd' })
    },
    showToast() {
      this.$toast({
        duration: 1500,
        message: '你好啊'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
