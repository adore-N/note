<template>
    <div class="detail">
        <img :src="server.baseUrl + data.url" alt="" >
        <div class="info">
            <p>{{data.info}}</p>
            <strong>￥{{data.price}}</strong>
        </div>
        <div class="more">
            <p>
                <span>发货地址:</span>
                <em>{{data.address}}</em>
                <i>月销:{{data.sales}}</i>
            </p>
            <p>
                <span>颜色:</span>
                <strong 
                    v-for="(item,index) of color"
                    :key="index" ref="color" 
                    @click="chooseColor(index)"
                    v-bind:class="{active:index == defColor}"
                >{{item}}</strong>
            </p>
            <p>
                <span>型号:</span>
                <strong  
                    v-for="(types,index_) of type"
                    :key="index_"
                     @click="chooseType(index_)"
                    v-bind:class="{active:index_ == defType}"
                >{{types}}</strong>
            </p>
        </div>
        <div class="buy">  
            <div class="num">
                <span>数量:</span>
                <input type="button" value="-" @click="subNum">
                <input type="text" value="" v-model="num" @input="checkNum">
                <input type="button" value="+" @click="addNum">
            </div>
            
            <p>
                <input type="button" value="加入购物车" @click="addCar(data)">
                <input type="button" value="立即购买" >
            </p>

        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            data:{},
            detail:{},
            color:[],
            type:[],
            num:1,
            defColor:'-1',
            defType:'-1',
        }
    },
    props:{
        id:String
    },
    activated(){
        let id = this.id;
        //这里需要注意,在这里缓存组件每次挂载的时候都需要重新把数据改为初始化
        this.num = 1;
        axios({
            url:`/shop/goods/${id}`
        }).then(
            res=>{
                this.data=res.data.data;
                this.detail=res.data.data.detail;
                this.color=res.data.data.detail.color;
                this.type=res.data.data.detail.type;
            }
        )
    },
    methods:{
        ...mapActions(['addCar']),  //这里使用扩展符,?????什么原理
        checkNum(){
            // console.log(this.num)
            //利用正则来表示除数字以外的不可以输入
            if(!(/^[1-9]*$/.test(this.num))){
                this.num = 1;
            }
            if(this.num == '') this.num = 1;
            this.data.num = this.num;
        },
        addNum(){
            this.num++;
            this.data.num = this.num;
            // console.log(this.num)
        },
        subNum(){
            this.num--;
            if(this.num < 1) this.num = 1;
            this.data.num = this.num;
        },
        chooseColor(index){
            this.data.colorNum = index;
            this.defColor = index
        },
        chooseType(index){
            this.data.typeNum = index;
            this.defType = index
        }
    }
}
</script>
<style lang="scss" scoped>
.detail{
    width: 100%;
    height: 100%;
    margin-top: .8rem;
    background: #f8f8f8;
    margin-bottom: 1rem;
    img{
        width: 100%;
        height: 6rem;
        display: block;
    }
    .info{
        background: #fff;
        margin-top: .1rem;
        p{
            font: 700 .2rem/.40rem "";
            color: #000;
           
            text-indent: 1em;
            padding: .1rem ;
        }
        strong{
           font-size: .3rem;
           color:red;
           display: block;
           padding: .1rem .1rem; 
        }
    }
    .more{
        width: 100%;
        background: #fff;
        margin-top: .1rem;
        padding: 0 .2rem;
        p{
            em{font-style: normal;color: #000;padding-left: .2rem;}
            i{float: right;font: .12rem/.7rem ''; color: #666;padding-right: .1rem;}
            strong{
                display: inline-block;
                width: 1rem;
                height: .6rem;
                border: .01rem solid #ccc;
                color: #666;
                font: .24rem/.6rem "";
                text-align: center;
                margin-left: .3rem;
            }
            .active{
                border-color: #e60021
            }
            span{
                color: #666;
                padding-right: .2rem;
                font: .12rem/.7rem '';
            }
        }
    }
    .buy{
        margin-top: .2rem;
        background: #fff;
        .num{
            display: flex;
            justify-content: center;
            width: 3rem;
            // margin: .3rem 0;
            span{
                color: #666;
                padding-left: .2rem;
                width: .8rem;
                margin-right: .1rem;
                font: .12rem/.42rem '';
                padding-top: .1rem;
            }
            input[type="button"]{
            border: .01rem solid #ccc;
            width: .5rem;
            height: .42rem;
            text-align: center;
            display: block;
            margin-top:.1rem;
            }
            input[type="text"]{
            border: .01rem solid #ccc;
            border-left: none;
            border-right: none;
            width: .8rem;
            height: .4rem;
            text-align: center;
            display: block;
            margin-top:.1rem;
            }
        }
        p{
            input[type="button"]{
                width: 50%;
                height: .6rem;
            }
            input[type="button"]:first-child{
                background: #ffc601;
            }
            input[type="button"]:nth-child(2){
                background: #ff4f01;
            }
        }
        p:nth-child(2){
            margin-top: .1rem;
            height: .6rem;
        }
    }  
}
</style>