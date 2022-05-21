import React, { Component } from "react";
import _map from 'lodash/map';
import { Link } from "react-router-dom";

import Layout from "../../components/organisms/layout";
import { VIDEO_LIST } from './constants';
import { TestimonialVideoWithCenterPlay, VideoWithCenterPlay } from "../../components/molecules/videoWithTitle/VideoWithTitle";
import { isMobileDevice } from "../../helpers/utils";

import './videos.css';

class Videos extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderStoryVideo() {
    return (
      <div className="video-main__video-player-wrapper">
        <img
          className="video-main__top"
          alt="DNA Skin"
          src="/images/common/circle-gray.png"
        />
        <VideoWithCenterPlay
          url="https://www.youtube.com/watch?v=eAQIqSUcZK8"
          thumbnail="https://img.youtube.com/vi/eAQIqSUcZK8/maxresdefault.jpg"
        />
        <img
          className="video-main__bottom"
          alt="DNA Skin"
          src="/images/common/circle-gray.png"
        />
      </div>
    );
  }

  renderVideoItem(video) {
    return (
      <div class="video-item">
        <TestimonialVideoWithCenterPlay {...video} />
      </div>
    );
  }

  renderContent(isMobile) {
    const videosList = [
      {
        url: "https://www.youtube.com/watch?v=eAQIqSUcZK8",
        thumbnail: "https://img.youtube.com/vi/eAQIqSUcZK8/maxresdefault.jpg",
      },
      ...VIDEO_LIST,
    ];
  
    return (
      <div class="video-items-container wrapper">
        {_map(isMobile ? videosList : VIDEO_LIST, video => this.renderVideoItem(video))}
      </div>
    );
  }


  renderTitle() {
    return (
      <div class="sub-page-title wrapper">
        Videos
        <div class="divider-center"></div>
      </div>
    );
  }

  render() {
    const isMobile = isMobileDevice();
    return (
      <Layout>
        {this.renderTitle()}
       {!isMobile && (<div className="video-main wrapper">
          {this.renderStoryVideo()}
        </div>)}
        {this.renderContent(isMobile)}
      </Layout>
    );
  }
}

export default Videos;
