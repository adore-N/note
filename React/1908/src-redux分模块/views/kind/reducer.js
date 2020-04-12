const reducer = (state = {
  kindlist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'CHANGE_KIND_LIST':
      return { ...state, ...{ kindlist: data } };
    default:
      return state
  }
}

export default reducer;
