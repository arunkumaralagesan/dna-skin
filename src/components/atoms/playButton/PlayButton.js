import React from "react";
import cx from "classnames";
import "./playButton.css";

function PlayButton({ size, onClick }) {
  return (
    <div className={cx("play__outer", { small: size === "s" })} onClick={onClick}>
      <div className="play__inner">
        <img
          className="play__icon"
          alt="Rating Logo"
          src="/images/common/play-icon.png"
        />
      </div>
    </div>
  );
}

export default PlayButton;
