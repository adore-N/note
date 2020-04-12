// 1、引入自定义的axios
import request from './request';

// 2、封装接口

/**
 * 封装 数据列表的接口
 * pageCode 页面
 * limitNum 每页显示个数
 */
const getProlist = (pageCode, limitNum) => {
  pageCode = pageCode * 1 || 0;
  limitNum = limitNum * 1 || 10;
  // 使用promise解决异步问题
  return new Promise((resolve) => {
    // 因为自定义的axios包含baseUrl,此处只需要写后面的接口即可
    request.get('/pro', { params: { pageCode, limitNum} }).then(res => {
      resolve(res.data)
    })
  })
}

/**
 * 请求轮播图接口
 * type 哪一个类型的轮播图 home / kind / activity 
 */

const getBannerlist = (type) => {
  type = type || 'home';
  return new Promise((resolve) => {
    request.get('/banner', { params: { type }}).then(res => {
      resolve(res.data)
    })
  })
}

/**
 * 登陆接口
 * @param {tel} String 
 * @param {password} String 
 */
const login = (tel, password) => {
  return new Promise(resolve => {
    request.post('/users/login', { tel, password }).then(res => {
      resolve(res.data)
    })
  })
}

/**
 * 获取详情页面的数据
 * @param {*} type 
 */
const getDetailData = (proid) => {
  return new Promise(resolve => {
    request.get('/pro/detail', { params: { proid }}).then(res => {
      resolve(res.data)
    })
  })
}

/**
 * 加入购物车
 * @param {*} type 
 */
const addCart = (userid, proid, num) => {
  return new Promise(resolve => {
    request.get('/cart/add', { params: { userid, proid, num } }).then(res => {
      resolve(res.data)
    })
  })
}
/**
 * 查看购物车
 * @param {*} type 
 */ 

const getCartlist = (userid) => {
  console.log('1111111111')
  return new Promise((resolve) => {
    request.get('/cart', { params: { userid }}).then(res => {
      console.log('res', res.data)
      resolve(res.data)
    })
  })
}

/**
 * 更新购物车接口
 */

const updateCart = (cartid, num) => {
  return new Promise(resolve => {
    request.get('/cart/update', { params: { cartid, num }}).then(res => {
      resolve(res.data)
    })
  })
}

/**
 * 删除购物车接口
 */
const deleteCart = (userid, proid) => {
  return new Promise(resolve => {
    request.get('/cart/delete', { params: { userid, proid }}).then(res => {
      resolve(res.data)
    })
  })
}

// 3、暴露接口
export {
  getProlist,
  getBannerlist,
  getCartlist,
  login,
  getDetailData,
  addCart,
  updateCart,
  deleteCart
}
