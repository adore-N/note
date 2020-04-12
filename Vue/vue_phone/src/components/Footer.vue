<template>
    <div class="footer">
        <ul>
            <router-link tag='li' to="/home" active-class="active"><i></i><a href="javascript:;">首页</a></router-link>
            <router-link tag='li' to="/home" ><i></i><a href="javascript:;">社区</a></router-link>
            <router-link tag='li' to="/home" ><i></i><a href="javascript:;">消息</a></router-link>
            <router-link tag='li' to="/car" active-class="active"><i></i><a href="javascript:;">购物车</a></router-link>
            <router-link tag='li' to="/user" active-class="active"><i></i><a href="javascript:;">我的</a></router-link>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.footer{
    height: 1rem;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: .01rem solid #ccc;
    ul{
        display: flex;
        padding: .1rem .2rem;
        justify-content: space-between;
        align-content: center;
        li{
            width: .8rem;
            text-align: center;
            i{
                display: block;
                width: .8rem;
                height: .4rem;
                background: url("../assets/images/menu.png") no-repeat;
                // background-size: 460px 149px;
                background-size: 4rem .8rem;
                background-position: 0 -.4rem;
                margin-bottom: .1rem;
            }
            a{
                color: #000;
            }
        }
        li:nth-child(2){
            i{background-position: -.8rem -.4rem;}
        }
        li:nth-child(3){
            i{background-position: -1.6rem -.4rem;}
        }
        li:nth-child(4){
            i{background-position: -2.4rem -.4rem;}
        }
        li:nth-child(5){
            i{background-position: -3.2rem -.4rem;}
        }
        .active{
            a{color: #ff6400;}
        }
        .active:nth-child(1){i{background-position: 0 0; }
        }
        .active:nth-child(2){i{background-position: -.8rem 0;}}
        .active:nth-child(3){i{background-position: -1.6rem 0;}}
        .active:nth-child(4){i{background-position: -2.4rem 0;}}
        .active:nth-child(5){i{background-position: -3.2rem 0;}}
    }
}
</style>