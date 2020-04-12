<template>
    <div class="books">
        <van-search placeholder="请输入搜索关键词" v-model="value" />

<!--  TODO:书架页面改成购物车页面-->

        <van-row type="flex" justify="center">
            <van-col span="20">

                <van-swipe  indicator-color="white" :height='200'>
                    <van-swipe-item>1</van-swipe-item>
                    <van-swipe-item>2</van-swipe-item>
                    <van-swipe-item>3</van-swipe-item>
                    <van-swipe-item>4</van-swipe-item>
                </van-swipe>


            </van-col>

        </van-row>

<!--        TODO:循环遍历数据,有多少渲染多少-->
        <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value: ''
            }
        }
    }
</script>
<style scoped>
    .books{
        background: #ccc;
    }
    .van-col--20 {
        background: red;
    }
</style>