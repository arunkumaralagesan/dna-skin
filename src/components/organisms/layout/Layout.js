import React, { Component } from 'react';
import Header from '../header';

import cx from 'classnames';

import './layout.css';

class Layout extends Component {
  renderHeader() {
    return <Header />;
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
      </div>
    )
  }
}

export default Layout;