import React, { Component } from "react";
import { Link } from "react-router-dom";
import _map from "lodash/map";
import _includes from "lodash/includes";

import { isMobileDevice } from "../../../helpers/utils";

import { SITE_MAP } from "./constants";
import { PHONES } from "../../../constants/general";

import "./header.css";
import cx from "classnames";

const KARNATAKA_NUMBER = "959-773-2847";

class Header extends Component {
  state = {
    isMenuOpen: false,
  };

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
          <a className="header__phone-number" href={`tel: ${PHONES.ONE}`}>
            {`+91 ` + PHONES.ONE}
          </a>
          <a className="header__phone-number" href={`tel: ${PHONES.TWO}`}>
            {`+91 ` + PHONES.TWO}
          </a>
        </div>
      </div>
    );
  }

  renderMobilePhoneContainer() {
    return (
      <div className="header__phone-mobile-container">
        <a className="header__phone-number" href={`tel: ${PHONES.ONE}`}>
          <img
            className="header__phone"
            src="/images/common/phone-big.png"
            alt="phone"
          />
        </a>
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

  renderMobileSiteTitle(page) {
    const isCurrentPage = _includes(window.location.pathname, page?.title);
    return (
      <div
        className={cx("site-map-title-mobile", {
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
      <div className={cx("header")}>
        <div className={cx("header__children", "wrapper")}>
          {this.renderLogo()}
          {this.renderSiteMaps()}
          {this.renderPhoneContainer()}
        </div>
      </div>
    );
  }

  renderMenuIcon() {
    return (
      <div onClick={() => this.setState(prevState => ({ isMenuOpen : !prevState.isMenuOpen }))}>
        <img
          className="header__menu-icon"
          alt="Menu"
          src="/images/common/menu.png"
        />
      </div>
    );
  }

  renderMobileMenuDrawer() {
    const { isMenuOpen } = this.state;
    return (
      <div className={cx("menu-drawer-container", { 'open': isMenuOpen })} onClick={event => { event.stopPropagation() }}>
      {_map(SITE_MAP, (page) => this.renderMobileSiteTitle(page))}
      </div>
    );
  }

  renderBackDrop() {
    const { isMenuOpen } = this.state;
    return (
      <div className={cx("menu-drawer-backdrop", { 'open': isMenuOpen })} onClick={() => this.setState(prevState => ({ isMenuOpen : !prevState.isMenuOpen }))}></div>
    );
  }

  renderMobileHeader() {
    return (
      <div className={cx("header")}>
        <div className={cx("header__children", "wrapper")}>
          <div className="header__left">
            {this.renderMenuIcon()}
            {this.renderLogo()}
          </div>
          <div class="header__right">{this.renderMobilePhoneContainer()}</div>
        </div>
        {this.renderMobileMenuDrawer()}
        {this.renderBackDrop()}
      </div>
    );
  }

  render() {
    const isMobile = isMobileDevice();
    if (isMobile) return this.renderMobileHeader();

    return this.renderWebHeader();
  }
}

export default Header;
