import React from 'react';
import ReactPlayer from 'react-player';

import './videoWithTitle.css';

function VideoWithTitle({ title, url }) {
  return (
    <div className="with-title__video-player">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )
}

export default VideoWithTitle;

