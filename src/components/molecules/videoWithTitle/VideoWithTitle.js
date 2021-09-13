import React, { useState } from "react";
import cx from "classnames";
import ReactPlayer from "react-player";
import PlayButton from "../../atoms/playButton/PlayButton";

import "./videoWithTitle.css";

function VideoWithTitle({ title, url, thumbnail }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="with-title__video-player">
      <div
        className={cx("video__wrapper", { playing: play })}
        style={{ backgroundImage: `url(${thumbnail})`, objectFit: "contain" }}
      >
        <div class="video__info gradient">
          <PlayButton size="s" onClick={() => setPlay(true)} />
          <div className="video__title">{title}</div>
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

export default VideoWithTitle;

export function VideoWithCenterPlay({ url, thumbnail }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="without-title__video-player">
      <div
        className={cx("video__wrapper", "center-wrapper", { playing: play })}
        style={{ backgroundImage: `url(${thumbnail})`, objectFit: "contain" }}
      >
        <div class="video__info">
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
