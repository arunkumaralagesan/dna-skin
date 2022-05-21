import React, { Component } from "react";
import _map from 'lodash/map';

import Layout from "../../components/organisms/layout";
import { PRESS_AND_MEDIA } from './constants';
import './pressAndMedia.css';

import PressCard from "../../components/molecules/pressCard/PressCard";

class PressAndMedia extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent() {
    return (
      <div class="press__media-content wrapper">
        {_map(PRESS_AND_MEDIA, article => <PressCard {...article} />)}
      </div>
    );
  }

  renderTitle() {
    return (
      <div class="sub-page-title wrapper">
        Press And Media
        <div class="divider-center"></div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        {this.renderTitle()}
        {this.renderContent()}
      </Layout>
    );
  }
}

export default PressAndMedia;
