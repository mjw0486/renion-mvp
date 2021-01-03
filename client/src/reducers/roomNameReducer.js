const roomNameReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATEROOMNAME':
      return action.payload;
    default:
      return state;
  };
};

export default roomNameReducer;