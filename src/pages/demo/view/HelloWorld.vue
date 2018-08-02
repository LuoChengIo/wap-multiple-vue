<template>
  <div class="hello">
    <h1 >{{iconJson.name}}</h1>
    <div class="item">
      <div v-for="(els,index) in iconJson.data" :key="index"> 
        <icon v-bind="els.attr" value="account_box"></icon>
        <pre v-highlight >
          <code class="html" v-text="els.html"></code>
        </pre>
      </div>
      
    </div>
    <h1 >{{btnJson.name}}</h1>
    <div class="item">
      <div v-for="(els,index) in btnJson.data" :key="index">
        <vc-button v-bind="els.attr" >{{els.title}}</vc-button>
        <pre v-highlight>
          <code class="html" v-text="els.html"></code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/components/icon'
import iconJson from '@/components/icon/data.json'
import VcButton from '@/components/button'
import btnJson from '@/components/button/data.json'
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
    }
  },
  computed: {
    btnJson() {
      const obj = btnJson
      obj.data.forEach(element => {
        element.attr = JSON.parse(element.attr)
      })
      return obj
    },
    iconJson() {
      const obj = iconJson
      obj.data.forEach(element => {
        element.attr = JSON.parse(element.attr)
      })
      return obj
    }
  },
  mounted() {
  },
  methods: {
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
  padding: 1em 0;
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
