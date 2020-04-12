// 容器组件 --- connect --- react的高阶组件
import { connect } from 'react-redux';
import UI from './UI';
import { getBannerlist, getProlist } from '@/utils/api'

// 获取状态管理器中的数据 --- 必有返回值
const mapStateToProps = (state) => { // state 是全部的状态
  // state { bannerlist: [], prolist: [], cartlist: [] }
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}

// 设计UI组件需要使用的业务逻辑 -- 必有返回值
const mapDispatchToProps = (dispatch) => { // store.dispatch
  return {
    getBannerlist () {
      console.log('请求轮播图数据')
      getBannerlist().then(data => {
        dispatch({
          type: 'CHANGE_BANNER_LIST',
          data: data.data
        })
      })
    },
    getProlist () {
      console.log('请求列表数据')
      getProlist().then(data => {
        dispatch({
          type: 'CHANGE_PRO_LIST',
          data: data.data
        })
      })
    }
  }
}


const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;
