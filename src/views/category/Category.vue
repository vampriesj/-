<template>
    <div class="category">
      <category-nav-bar></category-nav-bar>
      <div class="main">
        <scroll class="wrapper main-left">
          <category-list :category-list="categoryList" @itemClick="itemClick"></category-list>
        </scroll>
        <scroll class="wrapper main-right">
          <category-right :mait-key-list="maitKeyList"></category-right>
          <tab-control class="tab-control" :title="['流行','新款','精选']"  @tabClick="tabClick"></tab-control>
          <goods-list :goods="goods"></goods-list>
        </scroll>
      </div>
    </div>
</template>

<script>
  import CategoryList from "./childComponents/CategoryList";
  import CategoryNavBar from "./childComponents/CategoryNavBar";
  import CategoryRight from "./childComponents/CategoryRight";

  import {getCategory,getSubcategory,getCategoryDetail} from "../../network/category";

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from "../../components/comtent/goods/GoodsList";
  import TabControl from "../../components/comtent/tabControl/TabControl";

  export default {
    name: "Category",
    components:{
      CategoryList,
      CategoryNavBar,
      CategoryRight,
      Scroll,
      GoodsList,
      TabControl
    },
    data(){
      return {
        categoryList:[],
        currentIndex:0,
        maitKeyList:[],
        goods:[],
        currentType:'pop',
      }
    },
    created() {
      this.getCategory()
      console.log(this.categoryList !==undefined)
      // if(this.categoryList !==undefined){
      //   this.getSubcategory(this.categoryList,this.currentIndex)
      //   this.getCategoryDetail(this.currentIndex,this.currentType)
      // }
      // this.getCategoryDetail(this.currentIndex,this.currentType)
    },
    mounted() {
    },
    methods:{
      getCategory(){
        getCategory().then(res=>{
          this.categoryList = res.data.category.list
          console.log(res)
        })
      },
      getSubcategory(categoryList,currentIndex){
        getSubcategory(categoryList[currentIndex].maitKey).then(res=>{
          console.log(res)
          this.maitKeyList = res.data.list
        })
      },
      getCategoryDetail(currentIndex,type){
        getCategoryDetail(this.categoryList[currentIndex].miniWallkey,type).then(res=>{
          console.log(res)
          this.goods = res
        })
      },

      itemClick(index){
        this.currentIndex = index
        this.getSubcategory(this.categoryList,this.currentIndex)
        this.getCategoryDetail(this.currentIndex,this.currentType)
      },
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
        this.getCategoryDetail(this.currentIndex,this.currentType)
      }
    }
  }
</script>
<style scoped>
  .category{
    height: 100vh;
  }
  .wrapper{
    height: 100%;
    overflow: hidden;
  }
  .main{
    position: relative;
    height: calc(100% - 93px);
    display: flex;
  }
  .main-left{
    width: 100px;
  }
  .main-right{
    width: calc(100% - 100px);
  }
</style>
