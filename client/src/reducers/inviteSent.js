const inviteSentReducer = (state = false, action) => {
  switch (action.type) {
    case 'INVITESENT':
      return !state;
    default:
      return state;
  };
};

export default inviteSentReducer;