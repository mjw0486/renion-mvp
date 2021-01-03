import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// const numberOfInvites = useSelector(state => state.numberOfInvites);

const inviteListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADDTOLIST':
      const key = action.payload.key;
      const value = action.payload.value;
      let newInvite = Object.assign({}, state);
      newInvite[key] = value;
      return newInvite;
    case 'SENDINVITES':
      return {};
    default:
      return state;
  };
};

export default inviteListReducer;