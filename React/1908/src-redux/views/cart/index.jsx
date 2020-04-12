import React, { Component } from 'react';
import store from '@/store'
import { getCartlist } from '@/utils/api'
export default class extends Component {
  componentDidMount () {
    getCartlist(localStorage.getItem('userid')).then(data => {
      store.dispatch({
        type: 'CHANGE_CART_LIST',
        data: data.data
      })
    })
  }
  render () {
    console.log(store.getState())
    return (
      <div className="box">
        <header className = "header"></header>
        <div className = "content">cart</div>
      </div>
    )
  }
}