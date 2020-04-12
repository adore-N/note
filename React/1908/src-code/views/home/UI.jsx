import React, { Component } from 'react';
export default class extends Component {
  componentDidMount () {
    this.props.getBannerlist();
    this.props.getProlist();
  }
  render () {
    let { bannerlist, prolist } = this.props
    return (
      <div className="box">
        <header className = "header">首页</header>
        <div className = "content">
          首页
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