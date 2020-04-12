import { connect } from 'react-redux';
import UI from './UI';
import { getBannerlist, getProlist } from '@/utils/api'

// const mapStateToProps = (state) => {
//   return {}
// }
// const mapStateToProps = (state) => ({
//   bannerlist: state.bannerlist,
//   prolist: state.prolist
// })

const mapStateToProps = ({ bannerlist, prolist}) => ({ bannerlist, prolist })

const mapDispatchToProps = (dispatch) => ({
  getBannerlist () {
    getBannerlist().then(data => {
      dispatch({ type: 'CHANGE_BANNER_LIST', data: data.data })
    })
  },
  getProlist () {
    getProlist().then(data => {
      dispatch({ type: 'CHANGE_PRO_LIST', data: data.data })
    })
  }
})

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;