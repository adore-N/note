import React, { Component } from 'react';
import store from '@/store';
import { getBannerlist, getProlist } from '@/utils/api'
export default class extends Component {
  componentDidMount () {
    console.log(store)
    // console.log(store.getState())
    getBannerlist().then(data => {
      // 改变状态管理器状态
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
    console.log(store.getState())
    let { bannerlist, prolist } = store.getState()
    return (
      <div className="box">
        <header className = "header"></header>
        <div className = "content">
          {
            bannerlist.map(item => {
              return (
                <p key={ item.bannerid }>{ item.img }</p>
              )
            })
          }
          {
            prolist.map(item => {
              return (
                <p key={ item.proid }>{ item.proname }</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}