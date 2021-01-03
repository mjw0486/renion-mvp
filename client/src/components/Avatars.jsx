import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveAvatarX, moveAvatarY } from '../actions';
import { io } from 'socket.io-client';
import Avatar from './Avatar.jsx';
import { isEqual } from 'lodash';


const Avatars = function() {
  const dispatch = useDispatch();
  const socket = io('/');
  const avatarNumber = useSelector(state => state.avatarNumber);
  const screenName = useSelector(state => state.screenName);
  const myAvatar = useSelector(state => state.myAvatar);
  let avatars = useSelector(state => state.avatars);
  const avatarsTest = [myAvatar];
  useEffect(() => {
    window.addEventListener('keydown', handleMove);

    // socket.emit('in-proximity', 123, 2);
    return () => {
      window.removeEventListener('keydown', handleMove);
    };
  },[handleMove, myAvatar]);

  const handleMove = useCallback(event => {
    if(event.keyCode === 39) {
      console.log('right');
      if (myAvatar.xPosition < document.documentElement.scrollWidth - 20) {
        dispatch(moveAvatarX(20));
      }
    }
    if(event.keyCode === 37) {
      if (myAvatar.xPosition > 20) {
        console.log(myAvatar.xPosition);
        dispatch(moveAvatarX(-20));
      }
    }
    if(event.keyCode === 38) {
      if (myAvatar.yPosition > 20) {
        dispatch(moveAvatarY(-20));
      }
    }
    if(event.keyCode === 40) {
      if (myAvatar.xPosition < document.documentElement.scrollHeight - 20) {
        dispatch(moveAvatarY(20));
      }
    }
  });

  return (
    <div>
      {avatarsTest.map((avatar, index) => {
        return (
          <Avatar key={index} avatarNumber={avatar.avatarNumber} screenName={avatar.screenName} xPosition={avatar.xPosition} yPosition={avatar.yPosition} />
        )
      })}
    </div>
  );
};

export default Avatars;