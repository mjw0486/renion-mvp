import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles/styles.css';
import { createStore } from 'redux';
import allReducer from './Reducers';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';

const socket = io('/');
const videoGrid = document.getElementById('video-grid');

const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)
})

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

const myPeer = new Peer(undefined, {
  host: '/',
  port: '3000'
});

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})
socket.on('user-connected', userId => {
  console.log(`User Connected ${userId}`)
})

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
