import Vue from 'vue'
import Router from 'vue-router'
import Default from './views/default.vue'
/* 新闻 */
import aboutus from "./views/aboutus"
import culture from "./views/aboutus/culture.vue"
import honor from "./views/aboutus/honor.vue"
import kfsp from "./views/aboutus/kfsp.vue"
/* 商品 */
import product from "./views/product"
import hbtd from "./views/product/hbtd"
import yskf from "./views/product/yskf"
import qsyp from "./views/product/qsyp"
import swtc from "./views/product/swtc"
/* 案例 */
import cases from "./views/case"
/* 招聘 */
import job from "./views/job"
import resume from "./views/resume"
/* 留言 */
import guestbook from "./views/guestbook"
/* 联系我们 */
import contactus from "./views/contactus"
/* 登录 */
import login from './views/login'
/* 注册 */
import reg from './views/reg'
/* 新闻 */
import news from './views/news'
/* 文化 */
import kfwh from "./views/kfwh"

/*  */
/* 实验 */
// import lx from './components/lx.vue'
// import lx2 from './components/lx2.vue'
// import Carousel from './components/carousel.vue'
Vue.use(Router)

export default new Router({
  routes: [   
    {path:'/',component:Default},
    // {path:'/lx',component:lx},
    // {path:'/lx2/:name',component:lx2},
    
  /*首页 */
  {path:'/Default',component:Default},
  /* 新闻 */
  {path:'/aboutus',component:aboutus},
  {path:'/culture',component:culture},
  {path:'/honor',component:honor},
  {path:'/kfsp',component:kfsp},
  /*商品 */
  {path:'/product',component:product},
  {path:'/hbtd',component:hbtd},
  {path:'/yskf',component:yskf},
  {path:'/qsyp',component:qsyp},
  {path:'/swtc',component:swtc},
  /*案例 */ 
  {path:'/case',component:cases},
  /* 招聘 */
  {path:'/job',component:job},
  /* 组件间的跳转传参 */
  {path:'/resume',name:'resume',component:resume},
  /* 留言 */
  {path:'/guestbook',component:guestbook},
  /* 练习我们 */
  {path:'/contactus',component:contactus},
  /* 登录 */
  {path:'/login',component:login},
  /* 注册 */
  {path:'/reg',component:reg},
  /* 新闻 */
  {path:'/news',component:news},
  /* 文化 */
  {path:'/kfwh',component:kfwh},

  ]
})
