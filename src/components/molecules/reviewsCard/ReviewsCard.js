import React from "react";
import { Rate } from 'antd';
import 'antd/dist/antd.css'; 
import "./reviewsCard.css";

function ReviewsCard({ content, aggregate, name, url }) {
  return (
    <div className="reviews-card__container">
      <p className="reviews-catd__content">{content}</p>
      <div class="reviews-card__info">
        <img
        className="reviews-card__profile"
        alt="Rating Logo"
        src={url}
      />
        <div class="reviews-card__profile-info">
          <div class="reviews-card__ratings-name">{name}</div>
          <div class="reviews-card__ratings-star">
          <Rate allowHalf disabled defaultValue={5} className="reviews-card__ratings-star" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
