<template>
    <div class="homeshow">
        <h3>home页面展示区
            {{this.choose}}
        </h3>
    </div>
</template>
<script>
export default {
    props:{
        choose:String
    }
}
</script>