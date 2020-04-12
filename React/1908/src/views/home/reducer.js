const reducer = (state = {
  bannerlist: [],
  prolist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_BANNER_LIST':
      return { ...state, ...{ bannerlist: data } };
    case 'CHANGE_PRO_LIST':
      return { ...state, ...{ prolist: data } }  
    default:
      return state
  }
}

export default reducer;
