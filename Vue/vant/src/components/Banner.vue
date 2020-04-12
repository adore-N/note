<template>
        <van-swipe :autoplay="3000" indicator-color="white">
            <!-- TODO:这里需要修改每张图片的背景颜色 -->
        <van-swipe-item>
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3959399553,898244408&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=533762546,672570916&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2595508360,28762262&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <!-- <a href="1">11</a> -->
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=601590033,3516547104&fm=26&gp=0.jpg" alt="">
        </van-swipe-item>
    </van-swipe>

</template>

<style scoped>
.van-swipe {
    height: 251px;
}
.van-swipe-item {
    /* padding-top: 100px; */
    height: 251px;
    background: #ccc;
}
img{
    width: 100%;
    margin-top: 100px;
    height: 150px;

}
</style>