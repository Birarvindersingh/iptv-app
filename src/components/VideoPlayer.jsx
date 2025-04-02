import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-container">
      {url ? (
        <ReactPlayer url={url} playing controls width="100%" height="500px" />
      ) : (
        <p>Select a channel to watch</p>
      )}
    </div>
  );
};

export default VideoPlayer;