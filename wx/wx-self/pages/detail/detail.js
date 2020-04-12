// pages/detail/detail.js
import {douban,search} from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.log(options.api)


    if(options.api){
      search({
        url:'/music/'+options.id
      }).then(
        res => {
          console.log(res.data)
          this.setData({ detail: res.data })
          wx.setNavigationBarTitle({
            title: res.data.alt_title || "搜索",
          })
        }
      )
    }else{
      douban({
        url: "/douban/movieinfo",
        data: {
          movieId: options.id
        },
        loadingTop: true
      }).then(
        res => {
          this.setData({ detail: res.data.data })

          wx.setNavigationBarTitle({
            title: res.data.data.title,
          })
        }
      )
    }
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