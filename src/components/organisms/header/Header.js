import React, { Component } from "react";
import { Link } from "react-router-dom";
import _map from "lodash/map";
import _includes from "lodash/includes";

import { isMobileDevice } from "../../../helpers/utils";

import { SITE_MAP } from "./constants";
import "./header.css";
import cx from "classnames";

const KARNATAKA_NUMBER = "959-773-2847";

class Header extends Component {
  renderLogo() {
    return (
      <Link to="/" className="header__title">
        <img
          className="header__logo"
          alt="DNA Skin"
          src="/images/common/logo-big.png"
        />
      </Link>
    );
  }

  renderPhoneContainer() {
    return (
      <div className="header__phone-container">
        <img
          className="header__phone"
          src="/images/common/phone-big.png"
          alt="phone"
        />
        <div className="header__phone-number-wrapper">
          <a className="header__phone-number" href={`tel: ${KARNATAKA_NUMBER}`}>
            {`+91 ` + KARNATAKA_NUMBER}
          </a>
          <a className="header__phone-number" href={`tel: ${KARNATAKA_NUMBER}`}>
            {`+91 ` + KARNATAKA_NUMBER}
          </a>
        </div>
      </div>
    );
  }

  renderSiteTitle(page) {
    const isCurrentPage = _includes(window.location.pathname, page?.title);
    return (
      <div
        className={cx("site-map-title", {
          "site-map--selected": isCurrentPage,
        })}
      >
        {page?.title}
      </div>
    );
  }

  renderSiteMaps() {
    return (
      <div className="site-map-wrapper">
        {_map(SITE_MAP, (page) => this.renderSiteTitle(page))}
      </div>
    );
  }

  renderWebHeader() {
    return (
      <div className={cx('header')}>
        <div className={cx('header__children', 'wrapper')}>
        {this.renderLogo()}
        {this.renderSiteMaps()}
        {this.renderPhoneContainer()}
        </div>
      </div>
    );
  }

  render() {
    const isMobile = isMobileDevice();
    if (isMobile) return null; // handle mobile view

    return this.renderWebHeader();
  }
}

export default Header;
