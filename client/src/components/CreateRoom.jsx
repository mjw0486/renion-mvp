import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enter, exit } from '../actions';

const CreateRoom = function() {
  const dispatch = useDispatch();
  const handleClick = function(event) {
    event.preventDefault();
    dispatch(enter());
  }
  return (
    <React.Fragment>
      <form id='creatRoomForm'>
        <label>
          Room Name
          <input className='createRoomInput' type='text' name='roomName' />
        </label>
        <input onClick={handleClick} type='submit' name='Create Room' />
      </form>
    </React.Fragment>
  );
};

export default CreateRoom;