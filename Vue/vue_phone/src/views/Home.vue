<template>
  <div class="home">
    <Banner></Banner>
    <List :listData='listData'></List>
  </div>
</template>

<script>
import Banner from '../components/Banner' 
import List from '../components/List' 
export default {
  data(){
    return {
      listData: []
    }
  },
  name: 'home',
  components: {   //注册组件
    Banner,
    List
  },
  activated(){
    // console.log(1)
    axios({
      url:'/shop/home',
      // params:{}  //请求数据的页面,条数
       params:{_page:1,_limit:4}
    }).then(
      // res=>{this.listData = res.data},
      res=>this.listData = res.data
    );
    axios({
      url:'/shop/banner',
      params:{_page:1,_limit:4}
    }).then(
      res=>{
        this.$store.dispatch('UPDATE_BANNER',res.data)
      }
    )
  }

}
</script>
