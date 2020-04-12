<template>
    <nav>
        <ul>
            <li 
                v-for="(item,index) of navdata"
                :key="index"
            >
                <router-link :to="{name:'banner', params:{id:111,name:'222'}}">
                <p>{{item}}</p>
                </router-link>
            </li>
        </ul>
            <img src="../assets/images/banner.png" alt="">
    </nav>
</template>
<script>
export default {
    props:['navdata'],       //父子组件之间的数据,贴层传递
//  activated(){
//         console.log(this.$router.params)
//     }
}
</script>>
<style scoped>
nav{
    width: 100%;
    height: 3rem;
    background: green;
    /* background: url(../assets/images/banner.png ) no-repeat; */
}
img{
    width: 100%;
}
</style>