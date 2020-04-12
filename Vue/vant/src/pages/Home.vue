<template>
    <div class="home">
        <Header></Header>
        <Banner></Banner>
        <!-- Grid宫格 -->
        <van-grid 
            :border="true" 
            :column-num="5"
            gutter= 0
        >
            <van-grid-item>
                <van-icon name="column" size='35px' color='#9b7bf7'/>
                分类
            </van-grid-item>
            <van-grid-item>
                <van-icon name="fire" size='35px' color='#fcad2e'/>
                排行
            </van-grid-item>
            <van-grid-item>
                <van-icon name="gift-card" size='35px' color='#ff3e59'/>
                爽文
            </van-grid-item>
            <van-grid-item>
                <van-icon name="invition" size='35px' color='#ffa04d'/>
                推理
            </van-grid-item>
            <van-grid-item>
                <van-icon name="printer" size='35px' color='#4d93f2'    />
                完本
            </van-grid-item>
        </van-grid>

        <!-- FIXME:通过单数通过路由来实现的,但是首页的信息存在问题 -->
        <router-view></router-view>

    </div>
    
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import HomeShow from '../components/HomeShow.vue'
import { UPDATE_HOME } from "../store/types";

export default {
    data(){
        return {
            value:'',
            active:''
        }
    },
    // props:{
    //     choose:String,
    // },
    components:{
        Header,
        Banner,
        // Footer,
        HomeShow
    },
    //组件被挂在的时候请求数据
    mounted() {
        this.$store.dispatch(UPDATE_HOME)
    }
}
</script>

<style  scoped>
.home{
    background: #f5f5f5;
    /* background: #0f0; */
}
.van-grid{
    background: #fff;
}
.van-grid-item{
    font:14px/30px '';
    color: #333;
}
.van-grid-item__content--surround::after {
    border-width: 0;
}
.van-tabbar-item__icon {
   width: 30px;
   height: 30px;
}

 /* >>>[class*=van-hairline]::after{
    border: none;
    TODO:有效果但是报错
} */
</style>