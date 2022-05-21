import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";

import FloatMenu from "../../molecules/floatMenu/FloatMenu";

import cx from "classnames";

import "./layout.css";

class Layout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderHeader() {
    return <Header />;
  }

  renderFooter() {
    return <Footer />;
  }

  renderChildren() {
    const { children } = this.props;
    return <div className={cx("layout__children", "")}>{children}</div>;
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderChildren()}
        {this.renderFooter()}
        <FloatMenu />
      </div>
    );
  }
}

export default Layout;
