import React from "react";
import { Link } from "react-router-dom";

import _map from "lodash/map";
import { CLINIC, DISCOVER } from "./constants";
import "./footer.css";

import { PHONES } from "../../../constants/general";
import { isMobileDevice } from "../../../helpers/utils";

function Footer() {
  const renderCopyRight = () => (
    <div className="copy-right">
      © 2021 DNA Skin Clinic. All rights reserved.
    </div>
  );

  const renderFollowUs = () => {
    return (
      <div>
        <div className="footer__title">Follow Us:</div>
        <div className="social-media__wrapper">
          <a href="https://www.facebook.com/DNASkinClinicBangalore/">
            <img
              className="social-media__icon"
              alt="DNA Skin"
              src="/images/common/fb.png"
            />
          </a>
          <a href="https://www.instagram.com/drpriyankareddy/">
            <img
              className="social-media__icon"
              alt="DNA Skin"
              src="/images/common/instagram.png"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCQLCc-NqiWSVcz2LdU4xZ_w?view_as=subscriber">
            <img
              className="social-media__icon"
              alt="DNA Skin"
              src="/images/common/yt.png"
            />
          </a>
        </div>
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <img
        className="footer__logo"
        alt="DNA Skin"
        src="/images/common/logo-white.png"
      />
    );
  };

  const renderCallUs = () => {
    return (
      <div>
        <div className="footer__title">Call Us:</div>
        <p className="footer__phone-wrapper">
          <a className="footer__phone-number" href={`tel: ${PHONES.ONE}`}>
            {`+91 ` + PHONES.ONE}
          </a>
          <a className="footer__phone-number" href={`tel: ${PHONES.TWO}`}>
            {`+91 ` + PHONES.TWO}
          </a>
        </p>
      </div>
    );
  };

  const renderAddress = () => {
    return (
      <div>
        <div className="footer__title">Address</div>
        <p className="footer__content address__content">
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
        <div className="footer__title">Clinic</div>
        {_map(CLINIC, (item) => (
          <Link to={item?.path} className="footer_link">
            {item?.name}
          </Link>
        ))}
      </div>
    );
  };

  const renderDiscover = () => {
    return (
      <div>
        <div className="footer__title">Discover</div>
        {_map(DISCOVER, (item) => (
           <Link to={item?.path} className="footer_link">
             {item?.name}
           </Link>
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
        title="Map"
      />
    </div>
  );

  const isMobile = isMobileDevice();

  const renderMobileFooter = () => (
    <>
      <div className="footer__links">
        <div className="section-left">{renderClinic()}</div>
        <div className="section-right">{renderDiscover()}</div>
      </div>
      <div className="address_wrapper">
        {renderAddress()}
        {renderMap()}
      </div>
      <div className="footer-row">
        {renderCallUs()}
        {renderFollowUs()}
      </div>
      <div className="pull-left">{renderLogo()}</div>
      {renderCopyRight()}
    </>
  );

  const renderWebFooter = () => (
    <>
      <div className="footer-wrapper__web">
        <div className="footer__column section-1">
          {renderClinic()}
          {renderLogo()}
        </div>
        <div className="footer__column section-2">{renderDiscover()}</div>

        <div className="footer__column section-3">
          {renderAddress()}
          {renderCallUs()}
          {renderFollowUs()}
        </div>
        <div className="footer__column section-4">{renderMap()}</div>
      </div>
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
