const passwordIsActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLEACTIVEPASSWORD':
      return !state;
    default:
      return state;
  };
};

export default passwordIsActiveReducer;