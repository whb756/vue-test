<template>
  <div class="m-header">
    <div class="m-headerImg">
    <img src="@/assets/image/in-banner.jpg">
    </div>
    <div class="m-title">
      <span>首页</span>
      <i>></i>
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.m-header{
  width: 100%;
  .m-headerImg{
    height: 339px;
    img{
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  }
  .m-title{
    margin: 0 50px;
    font-size: 14px;
    padding-top: 10px;
    i {
      color: #a4a4a4;
      margin: 0;
    }
  }
}
</style>