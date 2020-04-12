// pages/search/search.js
import {search} from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData:[],
    page:1,
    count:10
  },

  //搜索数据
  toSearch: function(event){
    console.log(event)

    search({
      url:"/music/search?",
      data:{
        q:event.detail.value,
        start:1,
        count: 10,
      },
      loadingTop:true,
      loadingCenter:true
    }).then(
      res => {
        // console.log(res.data.musics)
        let result = [];
        res.data.music && res.data.musics.map((item)=>{
          result.push({
            rate:item.rating,
            image:item.image,
            title:item.alt_title,
            id:item.id,
            auth:item.attrs.singer
          })
        })
        this.setData({
          searchData: result
        })
      }
    )

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})