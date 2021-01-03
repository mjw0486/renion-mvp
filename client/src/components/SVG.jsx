import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeAvatar} from '../actions';
import MySvg1 from './icon.jsx';
import MySvg2 from './icon2.jsx';
import MySvg3 from './icon3.jsx';
import MySvg4 from './icon4.jsx';
import MySvg5 from './icon5.jsx';
import MySvg6 from './icon6.jsx';
import MySvg7 from './icon7.jsx';
import MySvg8 from './icon8.jsx';
import MySvg9 from './icon9.jsx';
import MySvg10 from './icon10.jsx';

const SVG = function() {
  const svgs = [<MySvg1/>, <MySvg2/>, <MySvg3/>, <MySvg4/>, <MySvg5/>, <MySvg6/>, <MySvg7/>, <MySvg8/>, <MySvg9/>, <MySvg10/>]
  const avatarNumber = useSelector(state => state.avatarNumber)
  const dispatch = useDispatch();
  const handleDecrease = function(event) {
    event.preventDefault();
    dispatch(changeAvatar(-1));
  }
  const handleIncrease = function(event) {
    event.preventDefault();
    dispatch(changeAvatar(1));
  }
  return (
    <div id='svg'>
      <div onClick={handleDecrease} className='avatarButtons' id='decreaseAvatarButton'> &larr; </div>
      {svgs[avatarNumber]}
      <div onClick={handleIncrease} className='avatarButtons' id='increaseAvatarButton'> &rarr; </div>
    </div>
  );
};

export default SVG;