import React from "react";
import _map from "lodash/map";
import { CLINIC, DISCOVER } from "./constants";
import "./footer.css";

import { isMobileDevice } from "../../../helpers/utils";

function Footer() {
  const renderCopyRight = () => (
    <div className="copy-right">
      © 2021 DNA Skin Clinic. All rights reserved.
    </div>
  );

  const renderLogo = () => {
    return (
        <img
          className="footer__logo"
          alt="DNA Skin"
          src="/images/common/logo-white.png"
        />
    );
  }

  const renderCallUs = () => {
    return (
      <div>
        <p className="footer__title">Call Us:</p>
        <p className="footer__content">
        +91 73384 44555
        </p>
      </div>
    );
  };

  const renderAddress = () => {
    return (
      <div>
        <p className="footer__title">Address</p>
        <p className="footer__content">
          803, Promenade, 2nd Cross, 80 Feet Road, Opp. Banaswadi Sub Registrar
          Office, HRBR Layout 1st Block, Kalyan Nagar, Bengaluru, Karnataka
          560043
        </p>
      </div>
    );
  };

  const renderClinic = () => {
    return (
      <div className="section__wrapper">
        <p className="footer__title">Clinic</p>
        {_map(CLINIC, (item) => (
          <div className="footer_link">{item?.name}</div>
        ))}
      </div>
    );
  };

  const renderDiscover = () => {
    return (
      <div>
        <p className="footer__title">Discover</p>
        {_map(DISCOVER, (item) => (
          <div className="footer_link">{item?.name}</div>
        ))}
      </div>
    );
  };

  const renderMap = () => (
    <div className="map__container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.319858258265!2d77.6484104!3d13.0146473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc641d18372f36544!2sDNA%20Skin%20Clinic%20Bangalore!5e0!3m2!1sen!2sin!4v1585274277918!5m2!1sen!2sin"
        width="300"
        height="200"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
    </div>
  );

  const isMobile = isMobileDevice();

  const renderMobileFooter = () => (
    <>
      <div className="footer__links">
        {renderClinic()}
        {renderDiscover()}
      </div>
      <div className="address_wrapper">
        {renderAddress()}
        {renderMap()}
      </div>
      {renderCallUs()}
      {renderLogo()}
      {renderCopyRight()}
    </>
  );

  const renderWebFooter = () => (
    <>
      <div className="footer__links">
        {renderClinic()}
        {renderDiscover()}
      </div>
      <div className="address_wrapper">
        {renderAddress()}
        {renderMap()}
      </div>
      {renderCallUs()}
      {renderLogo()}
      {renderCopyRight()}
    </>
  );

  return (
    <section className="footer-wrapper">
      <footer className="footer wrapper">
        {isMobile ? renderMobileFooter() : renderWebFooter()}
      </footer>
    </section>
  );
}

export default Footer;
