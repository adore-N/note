<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>

import Home from './pages/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer
  },

}
</script>

<style>

</style>
