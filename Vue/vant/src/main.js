import Vue from 'vue'
import App from './App.vue'
//引入状态管理
import store from './pulgins/store'
//引入路由
import router from './pulgins/router';

Vue.config.productionTip = false

//引入公共样式以及视口设置
import './assets/css/base.css';
import './assets/js/font';

//全局注册vantUI库 FIXME:可以优化为按需注册
import Vant from 'vant';
import 'vant/lib/index.css';

//引入异步交互插件
import './pulgins/axios';

//配置服务器地址TODO:

Vue.use(Vant);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
