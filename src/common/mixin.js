import {debouce} from "./utils";
import BackTop from "components/comtent/backTop/BackTop";

export const itemListMixin = {
  data(){
    return{
      itemImgListener:null,
      refresh:null
    }
  },
  mounted(){
    this.refresh = debouce(this.$refs.scroll.refresh,300)
    this.itemImgListener = ()=>{
      this.refresh()
    }
    this.$bus.$on('imgLoad',this.itemImgListener);
    // console.log('我是混入中的内容');
  }
}

export const backTop = {
  components:{
    BackTop
  },
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300);//点击返回顶部按钮，回到顶部,300为回到顶部的时间ms
    },
    backTopShow(position){
      //当滚动到一定距离时，出现返回顶部按钮
      this.isShow = -(position.y)>1000;
    }
  }
}
