import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default PlayerComponent;