<template>
    <div class="search">
        <input type="text" placeholder="输入商品 分类" :value="content" @keyup.13="search($event)" >
    </div>
</template>
<script>
export default {
    data(){
        return {
            content:'',
            cont:''
        }
    },
    methods:{
        search(ev){
            this.cont = ev.target.value;
            // console.log(ev.target.value)
            console.log(this.cont)
            this.$router.push({name:'goodslist',params:{cont:this.cont}}).catch((e) => {})
        }
    }
}
</script>
<style lang='scss' scoped>
.search{
    width: 100%;
    height: .80rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #ff304e;
    z-index: 1;
    input{
        height: .54rem;
        margin: .15rem auto;
        display: block;
        width: 4.8rem;
        background: #fff;
        border-radius: .27rem;
        text-indent: .3rem
    }
}
</style>