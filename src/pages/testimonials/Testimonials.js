import React, { Component } from "react";
import _map from 'lodash/map';
import { Link } from "react-router-dom";

import Layout from "../../components/organisms/layout";
import { VIDEO_LIST } from './constants';
import { TestimonialVideoWithCenterPlay } from "../../components/molecules/videoWithTitle/VideoWithTitle";
import PrimaryButton from "../../components/atoms/buttons/primary";

import './testimonials.css';

class Testimonials extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderVideoItem(video) {
    return (
      <div class="video-item">
        <TestimonialVideoWithCenterPlay {...video} />
      </div>
    );
  }

  renderContent() {
    return (
      <div class="testimonials-video-items-container wrapper">
        {_map(VIDEO_LIST, video => this.renderVideoItem(video))}
      </div>
    );
  }


  renderTitle() {
    return (
      <div class="sub-page-title wrapper">
        Testimonials
        <div class="divider-center"></div>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        {this.renderTitle()}
        {this.renderContent()}
        <Link to="/videos"><PrimaryButton text="More Videos" className="more-videos" /></Link>
      </Layout>
    );
  }
}

export default Testimonials;
