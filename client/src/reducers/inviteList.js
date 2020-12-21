import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// const numberOfInvites = useSelector(state => state.numberOfInvites);

const inviteListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADDTOLIST':
      return state.key = action.payload;
    case 'SENDINVITES':
      return {};
    default:
      return state;
  };
};

export default inviteListReducer;