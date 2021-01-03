const passwordReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATEPASSWORD':
      return action.payload;
    default:
      return state;
  };
};

export default passwordReducer;