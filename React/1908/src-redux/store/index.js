// 1、引入对应的模块
import { createStore } from 'redux';

// 2、创建纯函数，用来存放应用需要的状态 ----- 必须给返回值
// 纯函数有两个参数
// state 代表应用的初始化装填
// action 代表的是改变state触发的行为
const reducer = (state = {
  bannerlist: [],
  prolist: [],
  cartlist: []
}, action) => {
  // type 表示要改变哪一个初始化数据的标识
  // data 表示需要改变的数据
  const { type, data } = action;
  // 条件判断 改变状态 依靠对象合并
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return Object.assign({}, state, { bannerlist: data });
    case 'CHANGE_PRO_LIST':
      return {...state, ...{prolist: data}};
    case 'CHANGE_CART_LIST':
      return Object.assign({}, state, { cartlist: data });
    default:
      return state;
  }
}

// 3、创建仓库
const store = createStore(reducer);

// 4、暴露仓库
export default store;