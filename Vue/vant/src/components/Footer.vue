<template>
     <van-tabbar
            v-model="active"
            active-color="#e8554d"
            inactive-color="#b1b1b1"
            route
            >
            <van-tabbar-item icon="home-o" to='/books'>书架</van-tabbar-item>
            <van-tabbar-item icon="send-gift-o" to='/home/t1'>书城</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to='/type'>分类</van-tabbar-item>
            <van-tabbar-item icon="contact" to='/user'>我的</van-tabbar-item>
        </van-tabbar>

</template>
<script>
export default {
    data(){
        return {
            active:''
        }
    }
}
</script>
<style scoped>

</style>