import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import home from '@/views/home/reducer';
import kind from '@/views/kind/reducer';
import cart from '@/views/cart/reducer';

const reducer = combineReducers({
  home,
  kind,
  cart
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
