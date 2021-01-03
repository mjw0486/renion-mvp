import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Title = function() {
  const screenName = useSelector(state => state.screenName);
  const members = ['Sam', 'Emily']
  const comma = members.length ? ',' : '';
  return (
    <div id='titleContainer'>
      {/* <span id='logoTitle'>Reunion</span> */}
      <span id='roomTitle'>Room: {ROOM_ID.slice(0, ROOM_ID.indexOf('--'))}</span>
      <span id='membersTitle'>Members: {screenName}{comma} {members.map((member, index) => {
        if (index === members.length - 1) {
          return (
            <span>{member}</span>
          );
        } else {
          return  (
            <span>{member}, </span>
          )
        }
      })}</span>

    </div>
  );
};

export default Title;