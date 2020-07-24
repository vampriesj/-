<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default:''
      },
      isShow:{
        type: Boolean,
        default: false
      }
    },
    methods:{
      show(message,duration=2000){
        this.isShow = true;
        this.message = message

        setTimeout(()=>{
          this.isShow = false;
          this.message = ''
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    background-color: rgba(0,0,0,.6);
    border-radius: 10px;
    z-index: 6;
    color: #ffffff;
  }
</style>
