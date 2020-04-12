import { getBannerlist, getProlist } from '@/utils/api';

export default {
  getBannerlist (dispatch) {
    getBannerlist().then(data => {
      dispatch({
        type: 'CHANGE_BANNER_LIST',
        data: data.data
      })
    })
  },
  getProlist (dispatch) {
    getProlist().then(data => {
      dispatch({
        type: 'CHANGE_PRO_LIST',
        data: data.data
      })
    })
  }
}