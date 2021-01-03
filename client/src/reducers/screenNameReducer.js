const screenNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATESCREENNAME':
      return action.payload;
    default:
      return state;
  };
};

export default screenNameReducer;