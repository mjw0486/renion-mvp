const addToListInputIsActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLEACTIVEADDTOLISTINPUT':
      return !state;
    default:
      return state;
  }
};

export default addToListInputIsActiveReducer;