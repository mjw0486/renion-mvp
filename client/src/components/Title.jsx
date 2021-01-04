import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Title = function() {
  const screenName = useSelector(state => state.screenName);
  const members = ['Sam', 'Emily']
  const comma = members.length ? ',' : '';
  return (
    <div id='titleContainer'>
      <span id='roomTitle'>Room: {ROOM_ID.slice(0, ROOM_ID.indexOf('--'))}</span>
    </div>
  );
};

export default Title;