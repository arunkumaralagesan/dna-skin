import React from 'react';
import './imageWithBorder.css';

function ImageWithBorder({ url }) {
  if (!url) return null;
  return (
    <div className="border_image_wrapper">
      <img
          src={url}
          alt="insta"
          className="border_image"
        />
    </div>
  )
}

export default ImageWithBorder;

