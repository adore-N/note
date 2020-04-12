<template>
    <div>
        <Typeheader></Typeheader>
        <router-view></router-view>
    </div>
</template>
<script>
import Typeheader from '../components/Typeheader'
import TypeShow from '../components/TypeShow'
export default {
    components:{
        // TypeShow,
        Typeheader
    }
}
</script>
<style  scoped>

</style>