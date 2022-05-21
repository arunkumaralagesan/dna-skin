import React from "react";
import "./pressCard.css";

function PressCard({ mainImg, subImg, company, title, content, externalLink }) {
  const renderContent = () => (
    <div className="press__content-wrapper">
      <div className="press__published-by">Published by:</div>
      <div className="press__published-company">{company}</div>
      <div className="press__title">{title}</div>
      <div className="press__content">{content + "..."}</div>
    </div>
  );
  return (
    <div className="press__container">
      <a href={externalLink} target="blank" className="press__link-container">
        <div className="press__banner-container">
          <img
            alt="WhatsappLogo"
            src={mainImg}
            className="press__banner-image"
          />
          <img alt="WhatsappLogo" src={subImg} className="press__support-image" />
        </div>
        {renderContent()}
      </a>
    </div>
  );
}

export default PressCard;