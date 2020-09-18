export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_FORM':
      return !state;
    default:
      return state;
  }
};