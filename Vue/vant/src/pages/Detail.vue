<template>
    <div class="detail">
        <div class="d_head">

            <van-sticky :offset-top="0">
                <van-row gutter="20" >
                    <van-col span="16" offset="1"><van-icon name="arrow-left" size="20px" color="#fff"/></van-col>
                    <van-col span="3"><van-icon name="share" size="20px" color="#fff"/></van-col>
                    <van-col span="4" ><van-icon name="ellipsis" size="20px" color="#fff"/></van-col>
                </van-row>
            </van-sticky>

            <van-row>
                <van-col span="12">
                    <p>1123</p>
                    <p>
                        <span>1111</span>
                        <span>1111</span>
                    </p>
                    <p>
                        <span>111111</span>
                    </p>
                </van-col>
                <van-col span="12">
                    <van-image
                            width="100"
                            height="100"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </van-col>

            </van-row>

        </div>

        <div class="cont">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Detail"
    }
</script>

<style scoped>
.d_head{
    background: #ff4c5f;
    height: 250px;
}
    .van-icon{
        margin-top: 10px;
    }
</style>