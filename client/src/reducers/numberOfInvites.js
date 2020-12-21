const numberOfInvitesReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADDTONUMBEROFINVITES':
      return state += 1;
    case 'RESETNUMBEROFINVITES':
      return 0;
    default:
      return state;
  };
};

export default numberOfInvitesReducer;