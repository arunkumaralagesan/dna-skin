import React, { useRef, useState } from "react";
import _map from "lodash/map";
import { REVIEW_DETAILS } from "../../constants";
import ReviewsCard from "../../../../components/molecules/reviewsCard";
import { isMobileDevice } from "../../../../helpers/utils";

import './reviewCarousel.css';

function ReviewCarousel() {
  const ref = useRef(null);
  const [isLeftEnabled, setLeft] = useState(false);
  const [isRightEnabled, setRight] = useState(true);

  const handleScroll = () => {
    const totalWidth = ref.current?.getBoundingClientRect()?.width;
    const totalScrollWidth = ref.current?.scrollWidth;
    const leftScrolled = ref.current?.scrollLeft;
    const maxScrollLeft = totalScrollWidth - totalWidth;

    if (leftScrolled === 0) {
      setRight(true);
      setLeft(false);
    }else if (leftScrolled < maxScrollLeft) {
      setRight(true);
      setLeft(true);
    } else {
      setRight(false);
      setLeft(true);
    }
  };

  const isMobile = isMobileDevice();
  const getOffset = () => isMobile ? 270 : ref.current?.getBoundingClientRect()?.width * 0.9;
  return (
    <div className="review__carousel">
      <div className="review__cards" ref={ref} onScroll={handleScroll}>
        {_map(REVIEW_DETAILS, (review) => (
          <ReviewsCard {...review} />
        ))}
      </div>
      <div className="review__controls">
        <img
          className="review__controls--left"
          alt="Rating Logo"
          src={`/images/common/left-${isLeftEnabled ? 'selected' : 'gray'}.png`}
          onClick={() => ref.current.scrollTo({
            left: ref.current?.scrollLeft - getOffset(),
            behavior: 'smooth'
          })}
        />
        <img
          className="review__controls--right"
          alt="Rating Logo"
          src={`/images/common/right-${isRightEnabled ? 'selected' : 'gray'}.png`}
          onClick={() => ref.current?.scrollTo({
            left: (ref.current?.scrollLeft || 0) + getOffset(),
            behavior: 'smooth'
          })}
        />
      </div>
    </div>
  );
}

export default ReviewCarousel;
