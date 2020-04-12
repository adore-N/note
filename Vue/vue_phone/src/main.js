import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//引入公共样式以及视口设置
import './assets/css/base.css';
import './assets/js/font';

//配置过滤器
import './filters';

//引入异步交互插件axios的配置
import './plugins/axios';

//配置服务器地址
Vue.prototype.server = require('./config/server')

// 引入状态管理
import store from './plugins/store';

//全局引入vantUI库
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  data:{
    // bSearch:true,
    // bHeader:false,
    // // bLoading:false,
    // title: ''
    // bAccount:false
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
