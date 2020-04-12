const reducer = (state = {
  cartlist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_CART_LIST':
      return { ...state, ...{ cartlist: data } };
    default:
      return state
  }
}

export default reducer;
