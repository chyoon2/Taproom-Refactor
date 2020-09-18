export default (state = false, action) => {
  switch (action.type) {
    case 'EDIT_FORM':
      return !state;
    default:
      return state;
  }
};