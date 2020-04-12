<template>
    <div>
        <div class="car">
            <ul>
                <li 
                v-for=" item of buyCar"
                :key="item._id">
                <!-- FIXME:这里加入到购物车里面的数据还有detail:有关于颜色,类型的,可以渲染 :对应的是typenum,colornum -->
                    <h5>
                        <span>{{item.address}}</span>
                        <input type="button" value="删除" @click="deleteGoods({id:item._id})">
                    </h5>
                    <div class="box">
                        <input type="checkbox" name="" id="" @click="SelectOne($event,item._id)" :checked='$store.state.check'>
                        <img  :src="server.baseUrl + item.url" alt="" >
                        <div class="box">
                            <p>{{item.name}}</p>
                            
                            <div class="num">
                                <i>数量:</i>
                                <input type="button" value="-" @click="changeNum({id:item._id,num:-1})">
                                <input type="text" v-model="item.num" @input="checkNum({id:item._id,num:item.num})">
                                <input type="button" value="+"  @click="changeNum({id:item._id,num:1})">
                            </div>
                            <em>单价{{item.price | currency}}</em>
                            <em>总价{{item.price * item.num + '.00' | currency}}</em>   
                        
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <Account></Account>
    </div>
</template>
<script>
import store from '../plugins/store'
import { SELECT_ONE } from '../store/types.js'
import {mapGetters,mapActions} from 'vuex'
import Account from '../components/Account'
export default {
    components:{
        Account
    },
    data(){
        return {
            checkVal:false,
            selOne:{},
            selMore:[], 
        }
    },
    //TODO:添加功能把购物车数据存储到用户信息里面
    // beforeRouteLeave (to, from, next) {
    //     axios({
    //         url:'/shop/user'
    //     })
    //     next()
    // },
    computed:mapGetters(['buyCar']),
    methods:{
        ...mapActions(['changeNum','checkNum','deleteGoods']) ,
        SelectOne(ev,id){
            let sta = true;
            //通过循环来判断是否复选框的状态,
            this.selMore.forEach((item,index) => {
                if(item._id === id){  
                    sta = false;
                    item.checkVal = ev.target.checked;
                }
            });
            if(sta){
                let selOne = {};
                selOne._id = id;
                selOne.checkVal = ev.target.checked;
                this.selMore.push(selOne);
            }
            this.$store.dispatch(SELECT_ONE,...[this.selMore]);
        }
    }
}
</script>
<style lang="scss" scoped>
.car{
    width: 100%;
    margin-top:.8rem;
    background: #f8f8f8;
    ul{
        padding: .1rem .1rem;
        width: 100%;
        li{
            height: 2.5rem;
            width: 100%;
            padding: .3rem;
            // border-bottom: .01rem solid #ccc;
            background: #fff;
            border-radius: .3rem;
            margin-bottom: .2rem;
            h5{
                width: 100%;
                height: .30rem;
                span{
                    font-size: .24rem;
                    padding-left: .45rem;
                    float: left;
                }
                input{
                    float: right;
                    height: .4rem;
                    width: 1rem;
                    margin-right: .8rem;
                    background: rgb(245, 86, 86);
                    color: #fff;
                    font-size: .10rem;
                }
            }
            input[type="checkbox"]{
                float: left;
                margin-top: .6rem;
            }
            img{
                width: 1.7rem;
                height: 1.7rem;
                float: left;
                margin:  .2rem;
            }
            .box{
                float: left;
                margin-top: .2rem;
                p{
                    color: #000;
                    font: .24rem/.3rem '';
                }
                i{
                    width: 2.5rem;
                    font-style: normal;
                    color: #ccc;
                    display: block;
                    // padding-right: .2rem;
                }
                .num{
                    display: flex;
                    justify-content: center;
                    width: 2.4rem;
                    margin: .1rem 0;
                    input[type="button"]{
                    border: .01rem solid #ccc;
                    width: 2rem;
                    height: .42rem;
                    text-align: center;
                    display: block;
                    // margin:.3rem;
                    }
                    input[type="text"]{
                    border: .01rem solid #ccc;
                    border-left: none;
                    border-right: none;
                    width: .8rem;
                    height: .4rem;
                    text-align: center;
                    display: block;
                    // margin:.3rem;
                    }
                }  
                em{ 
                    display: block;
                    color: red;
                    font: .24rem/.5rem '';
                    font-style: normal;
                    
                }
            }
        }
    }
}
</style>