import React, { useState } from "react";
import cx from "classnames";
import ReactPlayer from "react-player";
import PlayButton from "../../atoms/playButton/PlayButton";
import { getYoutubeThumnailFromUrl, isMobileDevice } from '../../../helpers/utils';

import "./videoWithTitle.css";

export function VideoWithTitle({ title, url, thumbnail }) {
  const [play, setPlay] = useState(false);

  if (!thumbnail) {
    thumbnail = getYoutubeThumnailFromUrl(url);
  }
  return (
    <div className="with-title__video-player">
      <div
        className={cx("video__wrapper", { playing: play })}
        style={{ }}
      >
        <div className="video__info gradient">
          <PlayButton size="s" onClick={() => setPlay(true)} />
          <div className="video__title">{title}</div>
        </div>
      </div>
      {!play && <img alt="thumnail" src={thumbnail} className="testimonial_video-image" />}
      {play && (<ReactPlayer
        controls
        playing={play}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
        playIcon={<button>Play</button>}
        url={url}
      />)}
    </div>
  );
}

export default VideoWithTitle;

export function VideoWithCenterPlay({ url, thumbnail }) {
  const [play, setPlay] = useState(false);

  if (!thumbnail) {
    thumbnail = getYoutubeThumnailFromUrl(url);
  }

  return (
    <div className="without-title__video-player">
      <div
        className={cx("video__wrapper", "center-wrapper", { playing: play })}
        style={{ backgroundImage: `url(${thumbnail})`, objectFit: "contain" }}
      >
        <div className="video__info">
          <PlayButton size="m" onClick={() => setPlay(true)} />
        </div>
      </div>
      <ReactPlayer
        controls
        playing={play}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
        playIcon={<button>Play</button>}
        url={url}
      />
    </div>
  );
}


export function TestimonialVideoWithCenterPlay({ url, thumbnail }) {
  const [play, setPlay] = useState(false);

  const isMobile = isMobileDevice();

  if (!thumbnail) {
    thumbnail = getYoutubeThumnailFromUrl(url);
  }

  return (
    <div className="without-title__video-player-testimonials">
      <div
        className={cx("video__wrapper-testimonials", "center-wrapper", { playing: play })}
      >
        <div className="video__info"><PlayButton size={isMobile ? "m" : "s"} onClick={() => setPlay(true)} /></div>
      </div>
     {!play && <img alt="thumnail" src={thumbnail} className="testimonial_video-image" />}
     {play && (<ReactPlayer
        controls
        playing={play}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
        playIcon={<button>Play</button>}
        url={url}
      />)}
    </div>
  );
}
