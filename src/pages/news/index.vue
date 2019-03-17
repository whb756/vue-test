<template>
  <div class="m-news">
    <page-header :title="'新闻资讯'"></page-header>
    <div>新闻资讯</div>
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
   'page-header':PageHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>