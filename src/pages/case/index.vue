<template>
  <div class="m-case">
    <page-header :title="'工程案例'"></page-header>
    <div>工程案例</div>
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