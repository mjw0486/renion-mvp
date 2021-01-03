const screenNameInputIsActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLEACTIVESCREENNAME':
      return !state;
    default:
      return state;
  };
};

export default screenNameInputIsActiveReducer;