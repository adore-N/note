import { connect } from 'react-redux';
import UI from './UI';
import { getBannerlist, getProlist } from '@/utils/api'
// const mapStateToProps = ({ home: { bannerlist, prolist } }) => ({ bannerlist, prolist })

const mapStateToProps = (state) => {
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerlist () {
      getBannerlist().then(data => { dispatch({ type: 'CHANGE_BANNER_LIST', data: data.data } ) })
    },
    getProlist () {
      getProlist().then(data => { dispatch({ type: 'CHANGE_PRO_LIST', data: data.data } ) })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UI)