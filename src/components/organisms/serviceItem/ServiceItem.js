import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

import AppointmentForm from "../../../pages/home/components/appointmentForm";
import ImageWithBorder from "../../molecules/imageWithBorder";
import { VideoWithCenterPlay } from "../../molecules/videoWithTitle/VideoWithTitle";

import { getYoutubeThumnailFromUrl, isMobileDevice } from '../../../helpers/utils';
import PrimaryButton from "../../atoms/buttons/primary";
import "./serviceItem.css";

class ServiceItem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderBodyFirstContent(BODY_TITLE_1, BODY_VALUE_1) {
    if (!BODY_VALUE_1) return null;
    return (
      <div>
        <div className="service_body_title">{BODY_TITLE_1}</div>
        <div className="service_body_content">
          <ReactMarkdown children={BODY_VALUE_1} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    );
  }

  renderImageWithBorder(url) {
    return <ImageWithBorder url={url} />;
  }

  renderBodyFirstSection() {
    const {
      bodyContent: { BODY_TITLE_1, BODY_VALUE_1, BODY_IMAGE_URL } = {},
    } = this.props;
    const isImagePresent = BODY_IMAGE_URL;
    const isMobile = isMobileDevice();
    const leftWidth = isMobile ? '80%' : (isImagePresent ? '40%' : '0%');
    const rightWidth = isMobile ? '100%' : (isImagePresent ? '60%' : '100%');

    return (
      <div className="section_wrapper">
        <div class="left_section" style={{ width: leftWidth }}>
          {this.renderImageWithBorder(BODY_IMAGE_URL)}
        </div>
        <div class="right_section" style={{ width: rightWidth }}>
          {this.renderBodyFirstContent(BODY_TITLE_1, BODY_VALUE_1)}
        </div>
      </div>
    );
  }

  renderBodySecondSection() {
    const {
      bodyContent: { BODY } = {},
    } = this.props;
    return (
      <div className="body_markdown_wrapper">
        <ReactMarkdown children={BODY} rehypePlugins={[rehypeRaw]} />
      </div>
    );
  }

  renderVideoSection() {
    const {
      bodyContent: { BODY_VIDEO_URL } = {},
    } = this.props;
    if (!BODY_VIDEO_URL) return null;
    return (
      <div className="video_section_wrapper">
        <VideoWithCenterPlay
          url={BODY_VIDEO_URL}
          thumbnail={getYoutubeThumnailFromUrl(BODY_VIDEO_URL)}
        />
      </div>
    );
  }
  renderMarkdownBody() {
    return (
      <div className="wrapper markdown-body">
        {this.renderBodyFirstSection()}
        {this.renderBodySecondSection()}
        {this.renderVideoSection()}
      </div>
    );
  }

  renderAppointmentForm() {
    return (
      <section className="wrapper form-wrapper">
        <AppointmentForm />
      </section>
    );
  }

  renderBannerLeft(title, subTitle) {
    return (
      <div className="service-item-banner__left">
            <div className="service-item-banner--title">{title}</div>
            <div className="service-item-banner--content">{subTitle}</div>
            <PrimaryButton
              text="Book An Appointment"
              className="service-item-banner--button"
              onClick={() =>
                window.scrollTo({
                  top:
                    document.getElementById("appointment-form").offsetTop - 140,
                  behavior: "smooth",
                })
              }
            />
          </div>
    );
  }

  renderBannerRight(url) {
    return (
      <div className="service-item-banner__right">
        <img
          className="service-item-banner__image"
          alt="DNA Skin"
          src={url}
        />
      </div>
    );
  }

  renderItemBanner() {
    const {
      title,
      subTitle,
      url = "/images/landing/banner-main.png",
    } = this.props;
    return (
      <section className="service-item-wrapper">
        <div className="wrapper service-item-banner">
          {this.renderBannerLeft(title, subTitle)}
          {this.renderBannerRight(url)}
        </div>
        <img
          src="/images/common/service-opaque-shape.png"
          alt="insta"
          className="service-item-s-shape"
        />
      </section>
    );
  }
  render() {
    const { hideForm } = this.props;
    return (
      <div>
        {this.renderItemBanner()}
        {this.renderMarkdownBody()}
        {!hideForm && this.renderAppointmentForm()}
      </div>
    );
  }
}

export default ServiceItem;
