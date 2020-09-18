export default (state = {}, action) => {
  const { name, alcohol, quantity, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        alcohol: alcohol,
        quantity: quantity,
        id: id
      }
    });
  case 'DELETE_TICKET':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};