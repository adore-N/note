<template>
  <div id="app">
    <!-- <Header v-show="$root.$data.bHeader"></Header>
    <Search v-show="$root.$data.bSearch"></Search> -->
    <!-- 使用状态管理来处理数据 -->
    <Header v-show="$store.state.bHeader"></Header>
    <Search v-show="$store.state.bSearch"></Search>
    <!-- loading组件 -->
    <Loading v-show="$store.state.bLoading"></Loading>

    <!-- 缓存路由 -->
    <keep-alive>
      <!-- 需要显示的组件 -->
      <router-view></router-view>
    </keep-alive>
    <!-- <Accounts v-show="$root.$data.bAccount"></Accounts> -->
    <Footer v-show="$store.state.bFooter"></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Loading from './components/Loading'
// import Accounts from './components/Accounts'

import { VIEW_SEARCH, VIEW_HEADER, VIEW_TITLE, VIEW_FOOTER} from './store/types.js'

export default {
  name: 'app',
  components: {
    Search,Footer,Header,Loading,
  },
  methods:{
    checkPath(path){  //路由检测
        if(/car|detail|user/.test(path)){
          // this.$root.$data.bSearch = false;
          // this.$root.$data.bHeader = true;
          // if(path == '/car'){
          //   this.$root.$data.title='购物车';
          // }
          this.$store.dispatch(VIEW_SEARCH,false);
          this.$store.dispatch(VIEW_HEADER,true);
          this.$store.dispatch(VIEW_FOOTER,true);
          
          if(path == '/car'){
            this.$store.dispatch(VIEW_TITLE,'购物车');
            // this.$root.$data.bAccount = true;
          }
          if(/detail/.test(path)){
            // this.$root.$data.title='商品详情';
            this.$store.dispatch(VIEW_TITLE,'商品详情');
            // this.$root.$data.bAccount = false;
          }
          if(path == '/user'){
            // this.$root.$data.title='个人中心';
            this.$store.dispatch(VIEW_TITLE,'个人中心');
            // this.$root.$data.bAccount = false;
          }

        }
        if(/reg|login/.test(path)){
          this.$store.dispatch(VIEW_SEARCH,false);
          this.$store.dispatch(VIEW_HEADER,true);
          this.$store.dispatch(VIEW_FOOTER,false);
          // this.$root.$data.bAccount = false;
          if(path == '/reg'){
            // this.$root.$data.title='个人中心';
            this.$store.dispatch(VIEW_TITLE,'注册');
          }
          if(path == '/login'){
            // this.$root.$data.title='个人中心';
            this.$store.dispatch(VIEW_TITLE,'登录');
          }
        }
        if(/home/.test(path)){
          // this.$root.$data.bSearch = true;
          // this.$root.$data.bHeader = false;
          this.$store.dispatch(VIEW_SEARCH,true);
          this.$store.dispatch(VIEW_HEADER,false);
          this.$store.dispatch(VIEW_FOOTER,true);

          // this.$root.$data.bAccount = false;
        }
        if(/goodslist/.test(path)){
          // this.$root.$data.bSearch = true;
          // this.$root.$data.bHeader = false;
          this.$store.dispatch(VIEW_SEARCH,true);
          this.$store.dispatch(VIEW_HEADER,false);
          this.$store.dispatch(VIEW_FOOTER,true);

          // this.$root.$data.bAccount = false;
        }
    }
  },
  //数据检测,检测路径数据是否发生变化
  watch:{
    $route:{
    handler(current,prev){
        // current.path==/home|/follow|/colukn|/detail/23423234
        this.checkPath(current.path)
      },
      immediate:true,
      deep:true
    }
  }
}
</script>
<style>

</style>
