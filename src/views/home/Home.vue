<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-pos" :title="['流行','新款','精选']" @tabClick="tabClick" ref="tab1" v-show="isShowTab"></tab-control>
    <scroll class="wrapper" ref="scroll" :probe-type="3" @scrollPos="backShow" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature></feature>
      <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick" ref="tab"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>

</template>

<script>
  import HomeSwiper from "./childComponents/HomeSwiper";
  import Recommend from "./childComponents/Recommend";
  import Feature from "./childComponents/Feature";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/comtent/tabControl/TabControl";
  import GoodsList from "../../components/comtent/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeMultidata,getHomeGoods} from "../../network/home";
  import {backTop, itemListMixin} from "../../common/mixin";

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      Recommend,
      Feature,

      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    mixins:[itemListMixin,backTop],
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        tabOffsetTop:0,
        isShowTab:false,
        saveY:0,
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');


    },
    mounted() {
    },
    activated() {
      // console.log(this.saveY)
      // this.$refs.scroll.scrollTo(0,this.saveY,0);
      // this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getCurrentY();
      // console.log(this.saveY)
    },
    methods:{
      //防抖动函数
      // deBounce(func,delay){
      //   let timer=null;
      //   return function (...args) {
      //     if(timer) clearTimeout(timer)
      //     timer = setTimeout(()=>{
      //       func.apply(this,args)
      //     },delay)
      //   }
      // },
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;
        }
        //保持两个tab-control的点击效果一致
        this.$refs.tab1.currentIndex = index;
        this.$refs.tab.currentIndex = index;
      },

      backShow(position){
        this.backTopShow(position);
        //tabControl的停留吸顶效果
        this.isShowTab = this.tabOffsetTop < (-position.y);

      },
      loadMore(){
        // console.log("上拉加载更多")
        this.getHomeGoods(this.currentType);
      },
      //当轮播图图片加载完，获取tabcontrol到顶部的y值
      swiperLoad(){
        this.tabOffsetTop = this.$refs.tab.$el.offsetTop;
      },

      // 请求数据
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res=>{
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
          this.$refs.scroll.finishPullUp();
        })
      }
    },
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    position: relative;
    /*height: 100vh;*/
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;

    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
    /*left: 0;*/
    z-index: 3;
  }

  /*.tab-control{*/
  /*  !*position: relative;*!*/
  /*  !*top: 44px;*!*/
  /*}*/
  .tab-pos{
    position: sticky;
    z-index: 3;
    background-color: #ffffff;
  }
  .wrapper{
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  }
</style>
