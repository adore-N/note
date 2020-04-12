import Vue from 'vue';
import Router from 'vue-router';

//引入组件
import Home from '../pages/Home'
import Books from '../pages/Books'
import User from '../pages/User'
import Type from '../pages/Type'
import HomeShow from '../components/HomeShow'
import TypeShow from '../components/TypeShow'
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";

Vue.use(Router);

export default new Router({
    mode: 'hash',    //FIXME:路由模式:这里有问题
    base: process.env.BASE_URL,
    routes: [
        {path: '/home', name: 'home', component: Home,redirect:'/home/t1',
            children:[
                {
                    path: '/home/:choose',
                    name: 'homeshow',
                    component: HomeShow,
                    props:(route)=>({choose:route.params.choose,...route.query}),
                }
            ]
        },

        {path: '/books', name: 'books', component: Books,},
        {path: '/user', name: 'user', component: User},
        {path: '/type', name: 'type', component: Type,
            children:[
                {
                    path: '/type/:types',
                    name: 'typeshow',
                    component: TypeShow,
                    props:(route)=>({types:route.params.types,...route.query})
                }
            ]
        },
        {path: '/login',name: 'login', component: Login},
        {path: '/reg',name: 'reg', component: Reg},

        {path: '/detail', name: 'detail', component: Detail},

        {path: '/',redirect: '/home'}
    ]
})
