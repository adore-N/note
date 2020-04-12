<template>
  <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
</div>
</template>
<style scoped>
.loading{
            width: 100%;
            height: 15px;
            margin: 0 auto;
            text-align: center;
            position: absolute;
            left: 0;
            top:4rem; 
            z-index: 2
        }
        .loading span{
            display: inline-block;
            width: 15px;
            height: 100%;
            margin-right: 5px;
            background: #ccc;;
            animation: load 1.04s ease infinite;
        }
        .loading span:last-child{
            margin-right: 0px; 
        }
        @keyframes load{
            0%{
                opacity: 1;
                -webkit-transform: scale(1.2);
            }
            100%{
                opacity: .2;
                -webkit-transform: scale(.2);
            }
        }
        .loading span:nth-child(1){
            animation-delay:0.13s;
        }
        .loading span:nth-child(2){
            animation-delay:0.26s;
        }
        .loading span:nth-child(3){
           animation-delay:0.39s;
        }
        .loading span:nth-child(4){
            animation-delay:0.52s;
        }
        .loading span:nth-child(5){
            animation-delay:0.65s;
        }
</style>
