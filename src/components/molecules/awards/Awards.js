import React from "react";

import "./awards.css";

function Awards({ url, title, content }) {
  return (
    <div className="award-image__container-wrapper">
      <img className="award-image__main" alt={title} src={url} />
      <p className="award-container__title">{title}</p>
      <p className="award-container__content">{content}</p>
      <img
        className="award-image__stamp"
        alt="Award Stamp"
        src="/images/landing/award-stamp.png"
      />
    </div>
  );
}

export default Awards;
