<template>
    <div class="reg">
        <p>
            <input type="text" placeholder="请输入用户名" v-model="username">
        </p>
        <p>
            <input type="text" placeholder="请输入手机号" v-model="tel">
        </p>
        <p>
        <input type="text" placeholder="请输入密码" v-model="password">
        </p>
        <input type="button" value="立即注册" @click="reg">
        <a href="javascript:;">{{mess}}</a>

        
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            tel:'',
            password:'',
            mess:''
        }
    },
    methods:{
        reg(){
            //对数据进行处理
            let formData=new FormData();
            formData.append('username',this.username);
            formData.append('password',this.password);
            formData.append('tel',this.tel);

            axios({
                url:'/shop/reg',
                method:'post',
                data:formData
            }).then(
                res=>{
                    if(res.data.err === 0){
                        this.$router.push('/login')
                    }else{
                        this.mess = res.data.msg;
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
.reg{
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
}
</style>