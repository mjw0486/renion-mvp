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
myVideo.setAttribute('height', '150');
myVideo.setAttribute('width', '150');
const peers = {};

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)

  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    console.log("User Connected " + userId)
    connectToNewUser(userId, stream)
  })

  socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
  })
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })
  peers[userId] = call;
}

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

const myPeer = new Peer(undefined, {
  host: '/',
  port: '3001'
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
