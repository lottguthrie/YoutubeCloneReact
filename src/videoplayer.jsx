import React from "react";
import "./videoplayer.css";


function Video({ image, title }) {
  return (
    <div className="video">
      <img className="video_thumbnail" src={image} alt="" />
      <div className="video_info">
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
        </div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
      </div>
    </div>
  );
}

export default Video;