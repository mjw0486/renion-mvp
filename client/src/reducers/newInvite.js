const newInviteReducer = (state = '', action) => {
  switch (action.type) {
    case 'CREATEINVITE':
      return action.payload;
    case 'RESETINVITE':
      return '';
    default:
      return state;
  };
};

export default newInviteReducer;