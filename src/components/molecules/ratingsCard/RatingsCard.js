import React from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css'; 

import "./ratingsCard.css";

function RatingsCard({ url, aggregate, total}) {
  console.log({ url });
  return (
    <div className="ratings-card__container">
      <img
        className="ratings-card__logo"
        alt="Rating Logo"
        src={url}
      />
      <div className="ratings__info">
        <span className="ratings__aggregate">{aggregate}</span>
        <Rate allowHalf disabled defaultValue={aggregate} className="ratings__star-container" />
        <span className="ratings__total-count">{total + ' Reviews'}</span>
      </div>
    </div>
  );
}

export default RatingsCard;
