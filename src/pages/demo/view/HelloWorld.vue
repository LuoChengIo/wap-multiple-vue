<template>
  <div class="hello">
    <h1 >字体图表</h1>
    <div class="item">
      <icon ref="icon" value="account_box"></icon>
      <pre v-highlight>
        <code class="html" ref="sdsd" text="icon"></code>
      </pre>
    </div>
    <h1 >按钮</h1>
    <div class="item">
      <vc-button ref="btn">按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button round>圆角按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button block>块级按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button class="vm" icon="account_box" >图标按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button class="vm" :loading="true" >加载中</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button class="vm" v-waves >点击波纹按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
      <vc-button class="vm" :size="50" >更大号按钮</vc-button>
      <pre v-highlight>
        <code class="html" v-text="icon"></code>
      </pre>
    </div>
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
      loading: false,
      msg: 'Welcome to Your Vue.js App',
      icon: '<vc-button ref="btn">按钮</vc-button>'
    }
  },
  mounted() {
    this.$refs.sdsd.innerHTML = '<icon ref="icon" value="account_box"></icon>'
  },
  methods: {
    goOtherPage() {
      this.loading = true
      // this.$router.push({ path: '/fisrtPage/wdsd' })
    },
    showCode(id) {
      console.log(this.$refs[id])
      return this.$refs[id]
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
code{
  background-color: #fafafa;
}
.hello{
  padding: 20px;
}
.item{
  border: 1px solid #eaeefb;
  padding: 24px;
}
h1, h2 {
  font-weight: normal;
  margin: 20px 0;
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
