<template>
    <div class="goodslist">
        <List :listData='listData' :cont='cont'></List>
    </div>
</template>
<script>
import List from "../components/List";
export default {
    data(){
    return {
      listData: [],
      cont:''
    }
  },
    name:'goodslist',
    components:{
        List
    },
    activated(){
        console.log(this.$route.params) ///这里可以拿到通过搜素输入的数据 用户可以查询对应数据,然后传给List,进行渲染
        // this.cont = this.$route.params.cont
        axios({
            url:"/shop/goods",
            params:{_page:1,_limit:10}
        }).then(
            res=>this.listData = res.data
        )
    }
}
</script>
<style lang="scss" scoped>
.goodslist{
    // background: #ccc;
    margin-top: .8rem;
}
</style>