import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/home/Home.vue')
const Category=()=>import('views/category/Category.vue')
const Shopcart=()=>import('views/shopcart/Shopcart.vue')
const Profile=()=>import('views/profile/Profile.vue')
const Detail=()=>import('views/detail/Detail.vue')

//安装插件
Vue.use(VueRouter)
//创建路由对象
const routes=[
  {
    //redirect重定向
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:goodsId',
    component:Detail
  }
]
const router=new VueRouter({
  routes,
  mode:'history'
})
//导出router
export default router;
