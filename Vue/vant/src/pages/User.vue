<template>
    <div class="user">
        <van-row type="flex" justify="space-between">
            <van-col span="21"></van-col>
            <van-col span="3"><van-icon name="bell" class="te"  @click="showPopup" size="20px"/></van-col>
        </van-row>
        
        <van-row type="flex" justify="space-around" align='center'>
            <van-col span="4">
                <van-image
                    round
                    width="70px"
                    height="70px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <van-col span="13">
                <p>name</p>
                <p>name</p>
                <p>name</p>
            </van-col>
            <van-col span="2"></van-col>
        </van-row>

        <van-grid :border="true" :column-num="3">
            <van-grid-item  text="文字">
                1111<p>文字</p>
            </van-grid-item>
            <van-grid-item  text="文字">
                1111<p>文字</p>
            </van-grid-item>
            <van-grid-item  text="文字">
                1111
                <p>文字</p>
            </van-grid-item>
        </van-grid>
        
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>
        <van-row class="margin_top">
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
                <van-cell is-link @click="showPopup"><van-icon name="location-o" size='25px' class="left"/>展示弹出层</van-cell>
        </van-row>



        <!-- FIXME:这里是右侧的弹出层,需要做成组件 -->
        <van-popup 
            v-model="show"
            position='right'
            :overlay='false'
            :style='style'
            closeable
            close-icon-position="top-left"
            close-icon="arrow-left"
        >
            11
        </van-popup>


    </div>
</template>
<script>
export default {
    data() {
    return {
      show: false,

      style:{
          'background':'#ccc',
          width:'100%',
          height:'100%'
      },

    }
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  }
}
</script>
<style  scoped>
<<<.left{
    margin-top:10px;
    margin-right: 16px;
}
.user{
    background: rgb(245, 244, 244);
}
.van-icon {
    margin-top:15px; 
}
.van-row--justify-space-around {
    height: 100px;
}
.van-row--justify-space-between {
    background: #fff;
    height: 50px;
}
.van-row--align-center {
    background: #fff;
}
.margin_top {
    background: #fff;
    margin-top: 10px;
}
.van-cell {
    padding: 7px 15px; 
}
.van-cell__value--alone {
    line-height: 39px;
}
.van-icon[data-v-67a98cef] {
    margin-top: 9px;
}
.te{
    padding-top: 6px;
}
.van-icon[data-v-67a98cef][data-v-67a98cef] {
    margin-top: 7px;
    margin-right: 8px;
}

</style>