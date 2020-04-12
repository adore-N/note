import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: [],
  prolist: [],
  cartlist: [],
  kindlist: ['手机', '男装']
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return { ...state, ...{ bannerlist: data } }
    case 'CHANGE_PRO_LIST':
      return { ...state, ...{ prolist: data } }
    case 'CHANGE_CART_LIST':
      return { ...state, ...{ cartlist: data } }
    case 'CHANGE_KIND_LIST':
      return { ...state, ...{ kindlist: data } }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;
