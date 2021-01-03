const avatarNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGEAVATAR':
      if (state === 0 && action.payload === -1) {
        return 9;
      }
      return (state + action.payload) % 10;
    default:
      return state;
  }
};

export default avatarNumberReducer;