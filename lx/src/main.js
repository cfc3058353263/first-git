import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 引入ajax组件 */
import axios from "./axios"

import Myheader from './components/Myheader'
import Myfooter from './components/Myfooter'
import Carousel from './components/carousel'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'fnaePeGTojaj3Eg1r6IQMqZqdfbfkW0b'
})

Vue.component("my-header",Myheader);
Vue.component('my-footer',Myfooter);
Vue.component('carousel',Carousel);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
