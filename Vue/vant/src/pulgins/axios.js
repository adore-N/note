//引入VUE
import Vue from 'vue';
//引入axios
import axios from 'axios';
// TODO:这里需要继续引入状态管理,需要的时候在引入

//整体携带跨源凭证  前端解决跨域
axios.defaults.withCredentials = true;
// axios.defaults.withCredentials = true;//整体携带跨源凭证

//TODO:拦截器:只要实现loading图得效果



//把axios绑定到vue实例上面
Vue.prototype.$axios = axios;
window.axios = axios;