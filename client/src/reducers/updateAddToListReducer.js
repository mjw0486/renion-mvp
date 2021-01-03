const updateAddToListReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATEADDTOLIST':
      return action.payload;
    default:
      return state;
  };
};

export default updateAddToListReducer;