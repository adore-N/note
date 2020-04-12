import React, { Component } from 'react';
import { getBannerlist, getProlist  } from '@/utils/api'
import store from '@/store';
export default class extends Component {
  componentDidMount () {
    getBannerlist().then(data => {
      store.dispatch({
        type: 'CHANGE_BANNER_LIST',
        data: data.data
      })
    })
    getProlist().then(data => {
      store.dispatch({
        type: 'CHANGE_PRO_LIST',
        data: data.data
      })
    })
  }
  render () {
    console.log(store.getState().home)
    // let { bannerlist, prolist } = store.getState().home
    let { home: { bannerlist, prolist } } = store.getState()
    return (
      <div className="box">
        <header className = "header">首页</header>
        <div className = "content">
          首页
          {
            bannerlist.map((item) => (
              <p key={ item.bannerid }>{ item.img }</p>
            ))
          }
          {
            prolist.map((item) => (
              <p key={ item.proid }>{ item.proname }</p>
            ))
          }
        </div>
      </div>
    )
  }
}