import { connect } from 'react-redux';
import UI from './UI';
import action from './actionCreator';
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
      dispatch(action.getBannerlist)
    },
    getProlist () {
      dispatch(action.getProlist)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UI)