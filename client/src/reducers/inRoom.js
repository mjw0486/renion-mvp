const inRoomReducer = (state = false, action) => {
  switch (action.type) {
    case 'ENTER':
      return !state;
    case 'EXIT':
      return !state;
    default:
      return state;
  }
};

export default inRoomReducer;