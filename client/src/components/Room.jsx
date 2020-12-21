import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';
import createSocket from '../socket.js';

const Room = function() {
  createSocket();
  return(
    <React.Fragment>
      <div>
        Room!
      </div>
    </React.Fragment>
  );
};

export default Room;