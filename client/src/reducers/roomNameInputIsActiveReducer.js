const roomNameInputIsActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLEACTIVEROOMNAMEINPUT':
      return !state;
    default:
      return state;
  };
};

export default roomNameInputIsActiveReducer;