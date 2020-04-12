import { createStore, combineReducers } from 'redux'

import home from '@/views/home/reducer';
import kind from '@/views/kind/reducer';
import cart from '@/views/cart/reducer';

const reducer = combineReducers({
  home,
  kind,
  cart
})

const store = createStore(reducer);

export default store;
