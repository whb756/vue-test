<template>
  <div class="m-product">
    <page-header title="产品中心"></page-header>
    产品中心
  </div>
</template>

<script>
import PageHeader from "@/components/pageHeader.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    PageHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>