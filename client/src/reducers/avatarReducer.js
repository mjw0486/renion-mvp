import React from 'react';
// import { useSelector } from 'react-redux';

// const avatarNumber = useSelector(state => state.avatarNumber);
const avatarReducer = (state = {
  screenName: 'Anonymous',
  xPosition: 50,
  yPosition: 90,
  avatarNumber: 0,
  userId: '',
  currentRoom: 0
  }, action) => {
  switch (action.type) {
    case 'MOVEAVATARX':
      const newAvatarX = Object.assign({}, state);
      newAvatarX.xPosition += action.payload;
      return newAvatarX;
    case 'MOVEAVATARY':
      const newAvatarY = Object.assign({}, state);
      newAvatarY.yPosition += action.payload;
      return newAvatarY;
    case 'ASSIGNUSERID':
      const newAvatarUserId = Object.assign({}, state);
      if (state.userId === '') {
        console.log('state.userId is not equal to empty string');
        newAvatarUserId.userId = action.payload;
        return newAvatarUserId;
      }
      return state;
    case 'CREATESCREENNAME':
      const newAvatarScreenName = Object.assign({}, state);
      newAvatarScreenName.screenName = action.payload;
      return newAvatarScreenName;
    default:
      return state;
  }
};

export default avatarReducer;