<template>
    <div class="login">
        <p>
            <input type="text" placeholder="请输入手机号" v-model="tel">
        </p>
        <p>
            <input type="text" placeholder="请输入密码" v-model="password">
        </p>

        <input type="button" value="登录" @click="login">
        <strong>{{mess}}</strong>
        <div class="box">
            <router-link to='/reg'><a href="javascript:;">注册</a></router-link>
            <a href="javascript:;">忘记密码</a>   
        </div>
        <div class="three">
            <em>第三方登录</em>
            <h6>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </h6>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tel:'',
            password:'',
            mess:''
        }
    },
    methods:{
        login(){
            this.$store.dispatch('CHECK_USER',{
               tel:this.tel,
               password:this.password
            }).then(
                data=>{
                     data.err == 0 ? this.$router.push('/home') : this.mess = data.mess;
                        console.log(data)
                    }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    // padding-top: .8rem;
    width: 100%;
    text-align: center;
    background: url('../assets/images/login.png') no-repeat ;
    background-size: 1.2rem;
    background-position: center 1.3rem;
    padding-top: 3rem;
    p{
        border: .02rem solid #ccc;
        width: 4.5rem;
        height: .6rem;
        background: url('../assets/images/1.png') no-repeat .25rem center;
        margin: 0 auto;
        border-radius: .3rem;
        background-size: .3rem;
        margin-bottom: .3rem;
    }
    input{
        width: 4.5rem;
        height: .6rem;
        border-left: .02rem solid #ccc;
        display: block;
        margin-left: 0.7rem;
        text-indent: .2rem;
    }
    input[type="button"]{
        text-indent: 0;
        border: .02rem solid #ff4c5f;
        background: #ff4c5f;
        color: #fff;
        font: .2rem/.6rem "";
        margin: 0 auto;
        margin-top: .9rem;
        border-radius: .3rem;
    }
    .box{
        display: flex;
        width: 4.5rem;
        margin: 0 auto;
        margin-top:.2rem;
        justify-content: space-between
    }
    .three{
        width: 4.5rem;
        margin: 0 auto;
        margin-top: 1.2rem;
        em{
            font-style: normal;
            color: #bfbfbf;
        }
        h6{
            margin-top: .3rem;
            display: flex;
            justify-content: center;
            a{  
                margin: 0 .2rem;
                width: .6rem;
                height: .6rem;
            }
            a:first-child{
                background: url('../assets/images/qq.png') no-repeat center;
            }
            a:nth-child(2){background: url('../assets/images/wei.png') no-repeat center;}
            a:nth-child(3){background: url('../assets/images/bo.png') no-repeat center;}
        }
    }
}
</style>