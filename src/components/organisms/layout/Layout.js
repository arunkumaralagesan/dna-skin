import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

import cx from 'classnames';

import './layout.css';

class Layout extends Component {
  renderHeader() {
    return <Header />;
  }

  renderFooter() {
    return <Footer />;
  }

  renderChildren() {
    const { children } = this.props
    return (
      <div className={cx('layout__children', '')}>
        {children}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderChildren()}
        {this.renderFooter()}
      </div>
    )
  }
}

export default Layout;