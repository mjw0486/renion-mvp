import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
// import allReducer from './Reducers';
import { io } from 'socket.io-client';
import { addVideo, removeVideo, assignUserId, updateAvatars } from './actions/index.js';

const createSocket = function(roomNumber) {
  const dispatch = useDispatch();
  const socket = io('/');
  const videoGrid = document.getElementById('video-grid');
  const videos = useSelector(state => state.videos);
  const myAvatar = useSelector(state => state.myAvatar);
  const avatars = useSelector(state => state.avatars);

  const myVideo = document.createElement('video');
  myVideo.muted = true;
  myVideo.className = 'video';
  const peers = {};

  useEffect(() => {
    if (myAvatar.currentRoom === roomNumber) {
      console.log('myavatars room, roomNumber: ', myAvatar.currentRoom, roomNumber);
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      }).then(stream => {
        addVideoStream(myVideo, stream)

        myPeer.on('call', call => {
          call.answer(stream)
          const video = document.createElement('video')
          video.className = 'video';
          call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
          })
        })

        socket.on('user-connected', userId => {
          console.log("User Connected " + userId)
          connectToNewUser(userId, stream)
        })

        socket.on('user-disconnected', userId => {
          console.log('userId disconnected: ', userId)
          if (peers[userId]) peers[userId].close()
        })
      })
    }

    const myPeer = new Peer(undefined, {
      host: '/',
      port: '3001'
    });

    myPeer.on('open', id => {
      console.log('roommmmID: ', ROOM_ID, 'myPeer Id: ', id);
      if (myAvatar.userId === '') {
        console.log('no avatar yet');
        dispatch(assignUserId(id));
        console.log('myAvatar userid: ', myAvatar.userId);
        socket.emit('edit-avatars', myAvatar, avatars, ROOM_ID);
        console.log('myAvatar: ', myAvatar);

        socket.emit('join-room', ROOM_ID, id)
      }
    })
    socket.on('user-connected', userId => {
      console.log(`User Connected ${userId}`)
    })

    return () => {
      }
  },[connectToNewUser, addVideoStream, avatars, myAvatar]);
  // function connectToNewUser(userId, stream, myPeer) {
  //   const call = myPeer.call(userId, stream)
  //   const video = document.createElement('video')
  //   video.className = 'video';
  //   call.on('stream', userVideoStream => {
  //     addVideoStream(video, userVideoStream)
  //   })
  //   call.on('close', () => {
  //     // video.remove()
  //     dispatch(removeVideo(video, 1));
  //   })
  //   peers[userId] = call;
  // }
  // function addVideoStream(video, stream) {
  //   video.srcObject = stream;
  //   video.addEventListener('loadedmetadata', () => {
  //     video.play()
  //   })
  //   videoGrid.append(video)
  //   console.log('videoInAddvideostream: ', typeof video);
  //   // dispatch(addVideo(video));
  // }
  const connectToNewUser = useCallback((userId, stream) => {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    video.className = 'video';
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
      // video.remove()
      dispatch(removeVideo(video, 1));
    })
    peers[userId] = call;
  });

  const addVideoStream = useCallback((video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
    videoGrid.append(video)
    console.log('videoInAddvideostream: ', typeof video);
    // dispatch(addVideo(video));
  });
  socket.on('update-avatars', avatars => {
    dispatch(updateAvatars(avatars));
  })

}

export default createSocket;