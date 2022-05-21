import React, { Component } from "react";
import { Menu } from 'antd';

import { Link } from "react-router-dom";
import _map from "lodash/map";
import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";
import _get from "lodash/get";

import { isMobileDevice } from "../../../helpers/utils";

import { SITE_MAP } from "./constants";
import { PHONES } from "../../../constants/general";

import "./header.css";
import cx from "classnames";

const { SubMenu } = Menu;

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

  renderSecondLevelMenu(menu) {
    if (_get(menu, 'values')) {
      return this.renderParentMenu(menu, true);
    }
    const key = _get(menu, 'route');
    return (
      <Menu.Item key={key === '#' ? _get(menu, 'title') : key} item={menu}><Link to={_get(menu, 'route')} className="no_style">{_get(menu, 'title')}</Link></Menu.Item>
    );
  }
  
  renderFirstLevelMenu(menu) {
    const menuItems = _get(menu, 'values') || [];
    return (
      <Menu.ItemGroup key={_get(menu, 'title')} title={_get(menu, 'title')} item={menu}>
        {_map(menuItems, menu => this.renderSecondLevelMenu(menu))}
      </Menu.ItemGroup>
    );
  }

  renderParentMenu(page, skip) {
    const menuItems = _get(page, 'values') || [];
    if (_isEmpty(menuItems)) {
      return this.renderSecondLevelMenu(page);
    }
    return (
      <SubMenu key={_get(page, 'title')} title={_get(page, 'title')} item={page}>
        {_map(menuItems, menu => skip ? this.renderSecondLevelMenu(menu) : this.renderFirstLevelMenu(menu))}
      </SubMenu>
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

  handleClick = e => {
    const route = _get(e, 'item.props.item.route');
    console.log(JSON.stringify(route));
    // history.push(route);
  };

  renderSiteMaps() {
    return (
      <div className="site-map-wrapper">
        {/* {_map(SITE_MAP, (page) => this.renderSiteTitle(page))} */}
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={[window.location.pathname]}
          mode="horizontal"
          popupClassName="wrapper popup-class"
        >
        {_map(SITE_MAP, (page) => this.renderParentMenu(page))}
      </Menu>
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
    const { isMenuOpen } = this.state;
    const source = `/images/common/${isMenuOpen ? "close" : "menu"}.png`;
    const iconClass = isMenuOpen ? "header__menu-icon menu-closed" : "header__menu-icon";
    return (
      <div
        onClick={() =>
          this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))
        }
      >
        <img className={iconClass} alt="Menu" src={source} />
      </div>
    );
  }

  renderMobileMenuDrawer() {
    const { isMenuOpen } = this.state;
    return (
      <div
        className={cx("menu-drawer-container", { open: isMenuOpen })}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Menu
          onClick={this.handleClick}
          defaultSelectedKeys={[window.location.pathname]}
          mode="inline"
        >
        {_map(SITE_MAP, (page) => this.renderParentMenu(page))}
      </Menu>
      </div>
    );
  }

  renderBackDrop() {
    const { isMenuOpen } = this.state;
    return (
      <div
        className={cx("menu-drawer-backdrop", { open: isMenuOpen })}
        onClick={() =>
          this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }))
        }
      ></div>
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
          <div className="header__right">
            {this.renderMobilePhoneContainer()}
          </div>
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
