import React from 'react';
// import { useSelector } from 'react-redux';

// const avatarNumber = useSelector(state => state.avatarNumber);
const avatarsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATEAVATARS':
      const newAvatars = action.payload;
      return newAvatars;
    default:
      return state;
  }
};

export default avatarsReducer;