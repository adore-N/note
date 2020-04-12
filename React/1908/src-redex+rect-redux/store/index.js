import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: [],
  prolist: [],
  cartlist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return { ...state, ...{ bannerlist: data } }
    case 'CHANGE_PRO_LIST':
      return { ...state, ...{ prolist: data } }
    case 'CHANGE_CART_LIST':
      return { ...state, ...{ cartlist: data } }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;
