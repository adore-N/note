<template>
    <div class="banner">
        <swipe class="my-swipe"
        :speed="100"
        >
        <swipe-item 
            :class="'slide'+(index+1)"
            v-for="(item,index) of $store.state.banner"
            :key="item.id"
        ><img :src="server.baseUrl + item.url" alt=""></swipe-item>
        </swipe>
    </div>
    
</template>
<script>

import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    props:['banner'],
    components: {
    'swipe': Swipe, 
    'swipe-item': SwipeItem
  },

}
</script>
<style >
/* // .banner{
//     height: 2.94rem;
//     margin-top: .8rem;
//     width: 100%;
//     // background: #ccc;
//     img {
//         display: block;
//         width: 100%;
//         height: 2.94rem;
//     }
// } */
.my-swipe {
  height: 2.94rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: .8rem;
  width: 100%;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
  height: 2.94rem;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
  height: 2.94rem;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
img{
    width: 100%;
    height: 2.94rem;
}
</style>