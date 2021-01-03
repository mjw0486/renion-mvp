import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const VideoGrid = function() {
  const videos = useSelector(state => state.videos);
  console.log('videos in grid: ', videos);
  return (
    <div>
      {videos.map((video) => {
        console.log('video: ', video.video);
        return video.video;
      })}
    </div>
  );
};

export default VideoGrid;