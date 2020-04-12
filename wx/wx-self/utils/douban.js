//专门用来处理所有的数据请求
 //可以拿到app实例
 let app = getApp();
const douban =  ({url, data, loadingTop, loadingCenter}) => new Promise((resolve,reject)=>{
  //  console.log(data)
   if(loadingTop){
     //如果传来就显示顶部的加载
     wx.showNavigationBarLoading();
   }else if(loadingCenter){
     wx.showLoading({
       title: "加载中"
     })
   }

  wx.request({
    url: app.globalData.baseUrl + '/v1' + url,
    data:data,
    header:{
      "content-type": "json"
    },
    method:"get",
    success: function (res) {
        if (loadingTop) {
          wx.hideNavigationBarLoading()
        }else if (loadingCenter) {
          wx.hideLoading({
            title: "加载中"
          })
        }

      resolve(res);
    },
    fail: function (err) {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading({
          title: "加载中"
        })
      }

      reject(err);
    },
    complete: function () {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading({
          title: "加载中"
        })
      }
    }
  })
 })
 const search = ({url, data, loadingTop, loadingCenter}) => new Promise((resolve,reject)=>{
   console.log(loadingCenter)
   if(loadingTop){
     //如果传来就显示顶部的加载
     wx.showNavigationBarLoading();
   }
   if(loadingCenter){
     wx.showLoading({
       title: "加载中"
     })
   }

  wx.request({
    url: "https://douban.uieee.com/v2" + url,
    data:data,
    header:{
      "content-type": "json"
    },
    method:"get",
    success: function (res) {
        if (loadingTop) {
          wx.hideNavigationBarLoading()
        }
        if (loadingCenter) {
          wx.hideLoading({
              title: "加载中"
          })  
         }
      resolve(res);
    },
    fail: function (err) {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading({
          title: "加载中"
        })
      }

      reject(err);
    },
    complete: function () {
      if (loadingTop) {
        wx.hideNavigationBarLoading()
      } else if (loadingCenter) {
        wx.hideLoading({
          title: "加载中"
        })
      }
    }
  })
 })

 export { douban , search}