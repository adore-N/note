<template>
    <div class="search">
        <router-link :to="back" v-show="isShow">
            &lt;
        </router-link>
        <h3>{{$store.state.title}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            back:'',
            isShow:true
        }
    },
    //这里对需要返回拿着页面进行处理,使用mounted钩子函数不行,只在挂载的不是时候.不能实时改变数据
    //属性观测,实时更新数据
    methods:{
        checkReturn(path){
            // console.log(1);
            // console.log(this.back);
            // console.log(this.isShow);
            if(/goodslist|user/.test(this.$route.path)){
                this.back = '/home';
                this.isShow = true;
            }
            if(/login/.test(this.$route.path)){
                this.isShow = true;
                this.back = '/home';
            }
            if(/car/.test(this.$route.path)){
                this.back = '/detail';
                this.isShow = true;
            }
            if(/detail/.test(this.$route.path)){
                this.back = '/goodslist';
                this.isShow = true;
            }
            if(/reg/.test(this.$route.path)){
                this.back = '/login';
                this.isShow = true;
            }
            if(/home/.test(this.$route.path)){
                this.isShow = false;
            }
        }
    },
    watch:{
        $route:{
            handler(current,prev){
                // current.path==/home|/follow|/colukn|/detail/23423234
                this.checkReturn(current.path)
            },
            immediate:true,
            deep:true
        }           
    }
}
</script>
<style lang='scss' scoped>
.search{
    width: 100%;
    height: .80rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #ff304e;
    h3{
        font: .3rem/.8rem "";
        text-align: center;
        color: #fff;
    }
    a{
        position: absolute;
        left: .12rem;
        top: .18rem;
        width: .4rem;
        height: .4rem;
        text-align: center;
        color: #fff;
        font: 700 .4rem/.4rem '';
    }
}
</style>