import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';
import createSocket from '../socket.js';
import { useHistory } from "react-router-dom";

const Room = function({roomNumber}) {
  // const createNewSocket = useCallback((roomNumber) => {
  //   createSocket(roomNumber);
  // });
  // useEffect(() => {
    createSocket(roomNumber);
  // }, [createNewSocket]);
  return(
    <React.Fragment>
      <div className='room' id={`room-${roomNumber}`}>
        {ROOM_ID.slice(0, ROOM_ID.indexOf('--'))}
      </div>
    </React.Fragment>
  );
};

export default Room;