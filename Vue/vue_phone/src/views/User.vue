<template>
   <div class="user">

        <van-row class="head">
            <van-col span="4" offset="1">
                <van-image
                    round
                    fit='cover'
                    width="1rem"
                    height="1rem"
                    :src="server.baseUrl + $store.state.user.data.icon"
                />
            </van-col>
            <van-col span="10" offset="1">
                <p>{{$store.state.user.data.username}}</p>
                <van-notice-bar 
                    :scrollable="false"
                    background="#fff"
                    color="#333"
                    class="nickname"
                >
                    设置昵称
                </van-notice-bar>
            </van-col>
        </van-row>
        <van-grid 
            :border='false' 
        >
            <van-grid-item icon="star-o" text="收藏夹" />
            <van-grid-item icon="gift-o" text="关注店铺" />
            <van-grid-item icon="flag-o" text="足迹" />
            <van-grid-item icon="after-sale" text="红包" />
        </van-grid>

        <van-panel title="我的订单"  status="查看全部订单" class="sss">
            <van-grid 
                :column-num="5"
            >
                <van-grid-item icon="bag" text="代付款" />
                <van-grid-item icon="send-gift" text="待收货" />
                <van-grid-item icon="gift-card" text="代发货" />
                <van-grid-item icon="comment" text="评价" />
                <van-grid-item icon="setting" text="售后" />
            </van-grid>
        </van-panel>


        <van-button 
            type="primary" 
            size="large"
            @click="loginOut"
            color='rgb(255, 36, 36)'
        >
        注销
        </van-button>
       <!-- TODO: 页面需要优化,布局太简单   -->
        <!-- <a href="javascript:;" @click="loginOut">注销</a> -->


   </div>
</template>
<script>
import store from "../plugins/store.js";
export default {
    //路由前置守卫 在没有进入到这个路由前判断用户是否已经登录
    beforeRouteEnter(to,from,next){
        // console.log(1)
        store.state.user.err == 0 ? next() : next('/login');
        // TODO:需要在进入用户页面判断用户是否登录,弹出框的效果
    },
    data(){
        return{
            icon:''
        }
    },
    methods:{
        loginOut(){
            axios({
                url:'/shop/logout',
                method:'delete'
            }).then(
                res=>{
                    if(res.data.err === 0){
                        this.$router.push('/home');
                        //这里是直接修改state数据
                        this.$store.commit('CHECK_USER',{
                            err:1,
                            msg:'未登录'
                        })
                        
                    }
                }
            )
        }
    }
}
</script>
<style lang='scss' scoped>
.user{
    // text-align: center;
    margin-top:.8rem;
    .head{
        background: rgb(255, 36, 36);
        // height: 2rem;
        p{
            font: 600 .4rem/.6rem "";
            height: .6rem;
            color: #fff;
        }
        .van-notice-bar{
            height: .4rem;
            border-radius: .2rem;
        }
    }
    
     /deep/.van-grid-item__content {
        background-color: rgb(255, 36, 36);
        color: #fff;
        .van-grid-item__text{
            color: #fff;
        }
    }
    .sss{
        /deep/.van-grid-item__content{
            background-color: #fff;
            color:  rgb(255, 36, 36);
        }
        /deep/.van-grid-item__text{
            color: #666;
        }
    }

   
    a{
        color: #ccc;
    }
}
</style>