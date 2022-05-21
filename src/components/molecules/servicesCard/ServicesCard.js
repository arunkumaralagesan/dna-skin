import React from "react";

import "./servicesCard.css";

function ServicesCard({ url, title, route, history }) {
  return (
    <div className="services-card__wrapper" onClick={() => history.push(`/${route}`)}>
      <img className="services-card__image" alt={title} src={url} />
      <div className="services-card__title">{title}</div>
    </div>
  );
}

export default ServicesCard;
