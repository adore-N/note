import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import User from './views/User.vue'
import Car from './views/Car.vue'
import Reg from './views/Reg.vue'
import Login from './views/Login.vue'
import GoodsList from './views/GoodsList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/home', name: 'home',component: Home},
    {path:'/detail/:id',name:'detail',component:Detail,props:(route)=>({id:route.params.id})},
    {path:'/User',name:'user',component:User},
    {path:'/car', name:'car',component:Car },
    {path:'/reg', name:'reg',component:Reg }, 
    {path:'/login', name:'login',component:Login }, 
  //   {path:'/goodslist/', name:'goodslist',component:GoodsList
  //   // ,props:(route)=>({cont:route.params.cont})
  // }, 
    {path:'/goodslist/:cont', name:'goodslist',component:GoodsList
    ,props:(route)=>({cont:route.params.cont,...route.query})
  }, 
    // {path:'/',name:'detail',component:Detail},
    {path:'/',redirect:'/home'},
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // },
    // {
    //   path: '/banner',
    //   name: 'banner',
    //   component: Banner,
    //   props: {id:1,name:'222'}
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
