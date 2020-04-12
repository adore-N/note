<template>
    <div class="list">
        <ul>
            <li class="goods" 
                v-for="item of listData"
                :key="item._id"
            >
                <router-link :to="{name:'detail',params:{id:item._id}}"
                class="box"
                    >
                        <img :src="server.baseUrl + item.url" alt="">
                        <div class="goodsinfo">
                            <p>{{item.name}}</p>
                            <strong>{{item.price|currency}}</strong>
                            <em>{{item.address}}</em>
                        </div> 
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
// import '../filters/currency.js'
// import { currency } from '../filters/currency.js';
export default {
    props:{
        // listData:['listData'],
        listData:Array,
        cont:String
        },
    // props:{
    //     cont:String
    // },
    filters:{
        // currency(data){
        //     return '$' + data
        // }
    },
    // mounted(){
    //     console.log(1);
    //     console.log(currency)
    // }
}
</script>
<style lang="scss" scoped>
.list{
    margin-bottom: 1rem;
   ul{
       .goods{
           height: 2.5rem;
           .box{
                width:100%;
                height:2.5rem;
                display:block;
            
             img{
                width: 2.0rem;
                height: 2.1rem;
                float: left;
                padding: .1rem;
                padding-top: .2rem;
            }
            .goodsinfo{
                float: left ;
                padding: .1rem;
                p{
                    font: .24rem/.36rem "";
                    width: 4.0rem;
                    color: #000;
                    // text-overflow:ellipsis;
                    // overflow:hidden;
                    // white-space:nowrap;
                    height: 1rem;
                    padding-top: .3rem;
                    // width:3rem;;
                }
                strong{
                    color: red;
                    font-weight: 700;
                    font-size: .3rem
                }
                em{
                    font-style: normal;
                    display: block;
                    font-size: .12rem;
                    margin-top: .15rem;
                }
            }
           
            }
       }
   }
}
</style>