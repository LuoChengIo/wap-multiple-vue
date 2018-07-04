<template>
  <div class="hello">
    <h1 >{{ msg }}</h1>
    <icon value="account_box"></icon>
    <dc-button  @click.native="goOtherPage" text="去另外一个页面"></dc-button>
    <dc-button icon="account_box" @click.native="showToast" :size="28" text="提示"></dc-button>
  </div>
</template>

<script>
import icon from '@/components/icon'
import DcButton from '@/components/dc-button'
export default {
  name: 'HelloWorld',
  components: {
    icon,
    DcButton
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goOtherPage() {
      this.$router.push({ path: '/fisrtPage' })
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
  background-color: red
}
h1, h2 {
  font-weight: normal
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
  color: #42b983
}
</style>
