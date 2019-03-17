<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="m-navBar" id="nav" v-show="hideNav">
      <el-row>
        <el-col :sm="6">
          <img src="@/assets/image/logo.png"/>
        </el-col>
        <el-col :sm="2">
          <div @click="toHome('1')" :style="{'color':active=='1'?'#fff':'#a4a4a4'}">首页</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toAbout('2')" :style="{'color':active=='2'?'#fff':'#a4a4a4'}">关于我们</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toProduct('3')" :style="{'color':active=='3'?'#fff':'#a4a4a4'}">产品中心</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toExperience('4')" :style="{'color':active=='4'?'#fff':'#a4a4a4'}">VR体验</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toExperience('4')" :style="{'color':active=='4'?'#fff':'#a4a4a4'}">工程案例</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toExperience('4')" :style="{'color':active=='4'?'#fff':'#a4a4a4'}">新闻资讯</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toJoin('5')" :style="{'color':active=='5'?'#fff':'#a4a4a4'}">招商加盟</div>
        </el-col>
        <el-col :sm="2" >
          <div @click="toContact('6')" :style="{'color':active=='6'?'#fff':'#a4a4a4'}">联系我们</div>
        </el-col>
      </el-row>
    </div>
  <div class="m-page" >
    <router-view/>
  </div>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active:1,
      hideNav:true
    }
  },
  mounted() {
    console.log(window.screen.availHeight)
  document.getElementById('app').style.height = document.documentElement.clientHeight + 'px'
  },
  watch: {
  },
  methods: {
    toHome (num) {
      this.active = num
      this.$router.push("/home")
    },
    toAbout (num) {
      this.active = num
      this.$router.push({
        name:"about"
      })
    },
    toExperience (num) {
      this.active = num
      this.$router.push('./experience')
    },
    toContact (num) {
      this.active = num
      this.$router.push('./contact')
    },
    toProduct (num) {
      this.active = num
      this.$router.push('./product')
    },
    toJoin (num) {
      this.active = num
      this.$router.push('./join')
    }
  },
}
</script>

<style lang="less">
body{
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  position: relative;
  .m-navBar{
    height: 35px;
    line-height: 35px;
    padding-top:20px; 
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1999;
    .el-row {
      .el-col{
        color: #a4a4a4;
        text-align: center;
        cursor: pointer;
        div:hover{
          color: #fff !important;
        }
        &:first-child {
          height: 35px;
          text-align: right;
          img{
            height: 100%;
            margin-right: 70px;
          }
        }
      }
    }
  }
  .m-page{
    height: 100%;
  }
  
  /* margin-top: 60px; */
}
ul {
    list-style-type: none;
    padding: 0;
  }
li {
  display: inline-block;
}
</style>
