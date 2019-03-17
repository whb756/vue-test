<template>
  <div class="m-about">
    <page-header :title="'关于我们'"></page-header>
    <div>关于我们</div>
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