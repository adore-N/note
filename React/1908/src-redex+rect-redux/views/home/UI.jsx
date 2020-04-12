// UI组件
import React, { Component } from 'react';

class Com extends Component {
  componentDidMount () {
    this.props.getBannerlist();
    this.props.getProlist();
  }
  render () {
    console.log(this.props)
    // UI组件内部通过this.props获取容器组件提供的数据
    let { bannerlist, prolist } = this.props;
    console.log('bannerlist', bannerlist)
    console.log('prolist', prolist)
    return (
      <div className="box">
        <header className="header">头部</header>
        <div className="content">
          {
            bannerlist.map(item => (
              <p key={ item.bannerid }>{ item.img }</p>
            ))
          }
          {
            prolist.map(item => (
              <p key={ item.proid }>{ item.proname }</p>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Com;