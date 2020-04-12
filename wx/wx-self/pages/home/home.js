// pages/home/home.js
import {douban} from '../../utils/douban.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: [
      { tag: "热门",data:[]},
      { tag: "电影" ,data:[]},
      { tag: "电视剧",data:[]},
    ],
  },

  toSearch: function(){

    console.log(1)

    wx.navigateTo({
      url: '../search/search',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      douban({
        url: '/douban/movielist',
        data: {
          tag: this.data.type[0].tag,
          limit: 8,
          page: 1
        }
      }).then(
        // res=>console.log(res.data.data)
        res => this.setData({ "type[0].data": res.data.data })
      )
      douban({
        url: '/douban/movielist',
        data: {
          tag: this.data.type[1].tag,
          limit: 8,
          page: 1
        },
        loadingTop:true
      }).then(
        // res=>console.log(res.data.data)
        res => this.setData({ "type[1].data": res.data.data })
      )
      douban({
        url: '/douban/movielist',
        data: {
          tag: this.data.type[2].tag,
          limit: 8,
          page: 1
        }
      }).then(
        // res=>console.log(res.data.data)
        res => this.setData({ "type[2].data": res.data.data })
      )
    
    // console.log(this.data)
    
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