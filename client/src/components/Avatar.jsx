import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

const Avatar = function({xPosition, yPosition, avatarNumber, screenName}) {
  const svgs = [<MySvg1/>, <MySvg2/>, <MySvg3/>, <MySvg4/>, <MySvg5/>, <MySvg6/>, <MySvg7/>, <MySvg8/>, <MySvg9/>, <MySvg10/>]

  return (
    <div className='avatar' style={{top: yPosition, left: xPosition}}>
      <span className='avatarScreenName'>{screenName}</span>
      <span>{svgs[avatarNumber]}</span>
    </div>
  );
};

export default Avatar;