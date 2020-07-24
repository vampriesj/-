<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return {
        scroll
      }
    },
    props:{
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollPos',position);
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
        console.log("上拉加载")
      })

    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        // console.log('111111')
        this.scroll.refresh()
      },
      getCurrentY(){
        return this.scroll.y ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
