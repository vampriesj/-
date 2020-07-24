<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="navbar"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll" @scrollPos="scrollPos" :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <shop-message :goods="goods" ></shop-message>
      <shop-info :shop="shop"></shop-info>
      <detail-info :detail-info="detailInfo" @imgLoad="imgLoad"></detail-info>
      <params-info :param-info="paramInfo" ref="params"></params-info>
      <comment-info :comment-info="commentInfo" ref="comment"></comment-info>
      <goods-list :goods="recommend" ref="goods"></goods-list>
    </scroll>
    <detail-tabbar @addShop="addShop"></detail-tabbar>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <toast></toast>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import Scroll from "components/common/scroll/Scroll";
  import Toast from "components/common/toast/Toast";
  import DetailTabbar from "./childComponents/DetailTabbar";
  import ShopMessage from "./childComponents/ShopMessage";
  import ShopInfo from "./childComponents/ShopInfo";
  import DetailInfo from "./childComponents/DetailInfo";
  import ParamsInfo from "./childComponents/ParamsInfo";
  import CommentInfo from "./childComponents/CommentInfo";

  import GoodsList from "components/comtent/goods/GoodsList";

  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/detail";
  import {backTop, itemListMixin} from "../../common/mixin";
  import {debouce} from "../../common/utils";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      Scroll,
      Toast,
      DetailTabbar,
      ShopMessage,
      ShopInfo,
      DetailInfo,
      ParamsInfo,
      CommentInfo,
      GoodsList,
    },
    mixins:[itemListMixin,backTop],
    data(){
      return {
        goodsId:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        themeTopY:[],
        getThemeTopY:null,
        currentIndex:0,
      }
    },
    created() {
      this.goodsId = this.$route.params.goodsId;
      // console.log(this.goodsId)
      //请求数据
      this.getDetail();
      this.getRecommend();

      //防抖,给getThemeTopY赋值，对给themeTopY赋值的操作进行防抖
      this.getThemeTopY = debouce(()=>{
        this.themeTopY = []
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.goods.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE)//最后添加一个最大值，在下面scrollPos函数，联动效果的判断能简单很多
        // console.log(this.themeTopY)
      },200)
    },
    mounted() {
      //混入
    },
    destroyed() {
      // console.log('详情页destroyed')
      this.$bus.$off('imgLoad',this.itemImgListener);
    },
    methods:{
      getDetail(){
        getDetail(this.goodsId).then(res=>{
          //轮播图数据
          const data = res.result
          this.topImages = data.itemInfo.topImages;
          //店铺信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          //创建店铺信息的对象
          this.shop = new Shop(data.shopInfo);
          //保存商品的详情数据
          this.detailInfo = data.detailInfo;
          //获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
          //取出评论信息
          if(data.rate.cRate!==0){
            this.commentInfo = data.rate.list[0];
          }
          // console.log(this.commentInfo);
        })
      },
      getRecommend(){
        getRecommend().then(res=>{
          this.recommend = res.data.list;
          // console.log(this.recommend)
        })
      },
      imgLoad(){
        //混入refresh参数，所以可以直接拿到这个防抖函数
        this.refresh();
        this.getThemeTopY();
      },
      titleClick(index){
        // console.log(index)
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200)
      },
      scrollPos(position){
        const posY = -position.y;
        let length = this.themeTopY.length;
        for(let i=0; i<this.themeTopY.length-1;i++){
          if(this.currentIndex!=i && posY >= this.themeTopY[i] && posY < this.themeTopY[i+1]){
            this.currentIndex = i;
            this.$refs.navbar.currentIndex = i;
            // console.log(i)
          }
        }
        //返回顶部，混入mixin
        this.backTopShow(position)
      },
      //获取购物车需要展示的信息
      addShop(){
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.id = this.goodsId;

        // this.$store.cartList.push(product)
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res =>{
          console.log(res)
          this.$toast.show(res,2000)
        })
      }
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
  }
  .detail-scroll{
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 6;
    background-color: #ffffff;
  }

</style>
