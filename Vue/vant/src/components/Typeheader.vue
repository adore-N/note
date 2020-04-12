<template>
    <div class="head">
        <van-row justify="space-around" v-show="true">
                                        <!-- TODO:这里的搜索框的显示,需要做条渲,根据滑轮的高度 -->
            <van-col span="18">
                <van-search  
                    placeholder="请输入搜索关键词"
                    v-model="value"
                    background='rgba(0,0,0,0)'
                    
                    shape='round'
                    right-icon="scan"
                />
            </van-col>
                    <!-- color="#e3ddde" -->
                    <!-- color='rgba(0,0,0,0.3)' -->
                    <!-- color='rgba(242,240,241,0.8)' -->
            <van-col span="6">
                <van-button 
                    color='#e5dfe0'
                    size='small'
                    round
                >全部书籍</van-button>
            </van-col>
        </van-row>
        <van-sticky :offset-top="0">
            <!-- <van-row>
                <van-col span='24'> -->
                    <van-tabs 
                        background='rgba(0,0,0,0)' 
                        type='line' 
                        :border='false'
                        color='#fff'
                        title-inactive-color='#333'
                        title-active-color='red'
                        @click="tabClick"
                        :swipe-threshold = 6
                    >
                        <van-tab v-for="(item,index) of $store.state.d_tab_type" 
                            :title="item.name" 
                            :key="index" 
                            :to="{name:'typeshow',params:{types:item.types}}"
                            class="vanTab"
                        >
                        </van-tab>
                    </van-tabs>
                <!-- </van-col>s -->
                <!-- <van-col span='4'></van-col> -->
            <!-- </van-row>    -->
        </van-sticky>
    </div>
</template>
<script>
import { DATA_TAB_TYPE } from "../store/types";
export default {
    data(){
        return{
            value:''
        }
    },
   methods:{
       tabClick(name,title){
           console.log(name,title)
       }
   },
   // mounted:function () {
   //     //type页面的tab数据请求
   //     this.$store.dispatch(DATA_TAB_TYPE)
   // }
}
</script>
<style  scoped>
.van-tab span {
    display: block;
    width: 40px;
}
.head{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1111111111;
    /* background: #fff; */
}

/* >>> .van-field__control {
    /* 
     */
    /* color: red; */
/* } */ 
.van-icon{
    margin: 12px;
}
.van-button--small {
    height: 30px;
    margin-top: 12px;
}
</style>