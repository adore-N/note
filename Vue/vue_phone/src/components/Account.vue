<template>
    <div class="account">
        <div class="check">
            <input type="checkbox" name="" id="all" @click="selectAll($event.target.checked)">
            <label for="all">全选</label>
        </div>
        <div class="pay">
            <span>合计:</span>
            <strong>{{'￥'+account}}</strong>
            <input type="button" value="结算">
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed:mapGetters(['account']),
    methods:mapActions(['selectAll'])
    
}
</script>
<style lang="scss" scoped>
.account{
    width: 100%;
    border-top: .01rem solid #ccc;
    height: 1rem;
    position: fixed;
    bottom: 1rem;
    // background: #ccc;
    .check{
        float: left;
        height: 1rem;
        input{
            width: .3rem;
            height: .3rem;
            vertical-align: middle;
            margin: 0 .2rem;
        }
        label{
            vertical-align: middle;
            font: .3rem/1rem '';
            color: #ccc;
            
        }
    }
    .pay{
        float: right;
        height: 1rem;
        span{
            font: .32rem/1rem '';
            color: #333;
        }
        strong{
            font: .26rem/1rem '';
            color: #fc4f49;
            margin: 0 .1rem;
        }
        input{
            width: 2rem;
            height: .8rem;
            font: .3rem/.8rem '';
            background: #fc4f49;
            border: .01rem solid #fc4f49;
            border-radius: .4rem;
            color: #fff;
        }
    }
}
</style>