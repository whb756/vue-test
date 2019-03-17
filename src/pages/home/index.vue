<template>
<!-- 首页 -->
  <div class="m-hello">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="@/assets/image/swiper1.jpg" style="height:100%">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/swiper2.jpg" style="height:100%">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/image/swiper3.jpg" style="height:100%">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
    <!-- 侧边栏 -->
    <div class="m-side">
      <span :style="{'background':active==1?'rgba(146, 146, 146, 0.25)':''}"></span>
      <span :style="{'background':active==2?'rgba(146, 146, 146, 0.25)':''}"></span>
      <span :style="{'background':active==3?'rgba(146, 146, 146, 0.25)':''}"></span>
      <span :style="{'background':active==4?'rgba(146, 146, 146, 0.25)':''}"></span>
      <span :style="{'background':active==5?'rgba(146, 146, 146, 0.25)':''}"></span>
      <span :style="{'background':active==6?'rgba(146, 146, 146, 0.25)':''}"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:'1',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom"></span>`
            }
        },
        autoplay: {
            delay: 1500,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          speed: 1000,
          loop: true,
          grabCursor:true
      }
    }
  },
  watch: {
    index (val){
      if(this.index!='1'){
      document.getElementById('nav').style.display = 'none'
    }else{
      document.getElementById('nav').style.display = 'block'
    }
    }
  },
  methods: {
    // 鼠标滚轮事件监听
    wheelFun (e) {
    let  direction = e.deltaY>0?'down':'up'
    let index = Number(this.index)
    if(index>1&&index<6){
      if(direction=='down'){       
          this.index++      
      } else {
          this.index--
      }
    } else if(index>=6){
      if(direction=='up'){
          this.index--
      }
    } else if(index<=1){
      if(direction=='down'){
         this.index++
      }
    }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.m-hello {
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-slide {
      width: 100%;
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        border-radius: 0;
      }
    }
  }
  .m-side{
    position: fixed;
    top:40%;
    right: 15px;
    z-index: 999;
    span{
      display: block !important;
      width: 12px;
      height: 12px;
      // background: rgba(146, 146, 146, 0.25);
      border: 1px rgba(146, 146, 146, 0.42) solid;
      border-radius: 50%;
      margin-bottom: 15px;
    }
  }
  .m-sidePage{
    height: 100%;
  }
}
.swiper-pagination-bullet-custom{
    width: 55px;
    height: 6px;
    text-align: center;
    color: #000;
    opacity: 1;
    background: rgba(255,255,255,.48);
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    background: #ba4d58;
  }
</style>