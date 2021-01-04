import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';
import createSocket from '../socket.js';
import { useHistory } from "react-router-dom";

const Room = function({roomNumber}) {
    createSocket(roomNumber);
  return(
    <React.Fragment>
      <div className='room' id={`room-${roomNumber}`}>

      </div>
    </React.Fragment>
  );
};

export default Room;