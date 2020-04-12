<template>
    <div class="login">
        <van-nav-bar
                title="标题"
                left-text="返回"

                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />

        <van-cell-group>
            <van-field v-model="value" placeholder="请输入用户名" />
            <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>

        <van-button :loading="t" type="info" loading-text="加载中..." text="登录" @click="loading"/>


    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                t: false,
                value:'',
            }
        },

        methods:{
            loading(){
                this.t = !(this.t);
                console.log(this.t)
            },
            onClickLeft(){
                console.log(11)
            },
            onClickRight(){
                console.log(22)
            }
        }
    }
</script>

<style scoped>

</style>