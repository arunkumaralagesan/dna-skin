/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import _map from "lodash/map";
import { Link } from "react-router-dom";
import Layout from "../../components/organisms/layout";

import PrimaryButton from "../../components/atoms/buttons/primary";
import Awards from "../../components/molecules/awards";
import ServicesCard from "../../components/molecules/servicesCard/ServicesCard";

import {
  SERVICES,
  MAIN_TITLE_1,
  MAIN_TITLE_2,
  MAIN_CONTENT_1,
  TESTIMONIAL_VIDEOS,
  RATING_DETAILS,
} from "./constants";
import { isMobileDevice } from "../../helpers/utils";

import "./home.css";
import VideoWithTitle from "../../components/molecules/videoWithTitle/VideoWithTitle";
import RatingsCard from "../../components/molecules/ratingsCard";
import ReviewCarousel from "./components/reviewCarousel";
import AppointmentForm from "./components/appointmentForm";

import { VideoWithCenterPlay } from "../../components/molecules/videoWithTitle/VideoWithTitle";

class Home extends Component {
  renderMainBanner() {
    return (
      <section className="main-banner wrapper">
        <div className="main-banner__left">
          <div className="main-banner--dark">{MAIN_TITLE_1}</div>
          <div className="main-banner--green">{MAIN_TITLE_2}</div>
          <div className="main-banner--content">{MAIN_CONTENT_1}</div>
          <PrimaryButton
            text="Learn More"
            className="main-banner--learn-more"
          />
        </div>
        <div className="main-banner__right">
          <img
            className="main-banner__image"
            alt="DNA Skin"
            src="/images/landing/banner-main.png"
          />
        </div>
        <div className="main-banner__watermark">DNA</div>
      </section>
    );
  }

  renderMobileMainBanner() {
    return (
      <section className="main-banner wrapper">
        <div className="main-banner__left">
          <div className="main-banner--dark">{MAIN_TITLE_1}</div>
          <div className="main-banner--green">{MAIN_TITLE_2}</div>
          <div className="main-banner--content">{MAIN_CONTENT_1}</div>
          <PrimaryButton
            text="Learn More"
            className="main-banner--learn-more"
          />
          <div className="main-banner__watermark">DNA</div>
        </div>
        <div className="main-banner__right">
          <img
            className="main-banner__image"
            alt="DNA Skin"
            src="/images/landing/banner-main.png"
          />
        </div>
      </section>
    );
  }

  renderAwards() {
    return (
      <section className="awards wrapper">
        <div className="awards__title section-title">
          Awards And Recognitions
        </div>
        <p className="awards__content">
          When Clients Come First, Awards Follow
        </p>
        <div className="awards__images">
          <Awards
            url="/images/landing/cosme.png"
            title="ASSOCHAM COSM’e India Awards 2017"
            content="Presented to DNA Skin Clinic for Best Skin & Hair Clinic of the year."
          />
          <Awards
            url="/images/landing/global-business.png"
            title="GLOBAL BUSINESS Awards 2018"
            content="Dr. Priyanka Reddy, DNA Skin Clinic for Best Skin & Hair Clinic of the year."
          />
        </div>
      </section>
    );
  }

  renderServicesWeOffer() {
    const { history } = this.props;
    return (
      <section className="services-container">
        <div className="services wrapper">
          <div className="services__title section-title">Services We Offer</div>
          <div className="services__cards">
            {_map(SERVICES, (service) => (
              <ServicesCard {...service} history={history} />
            ))}
          </div>
          {/* <PrimaryButton text="View All" className="services__view-all" /> */}
        </div>
        <img
          className="services__half-top"
          alt="DNA Skin"
          src="/images/common/circle.png"
        />
        <img
          className="services__half-bottom"
          alt="DNA Skin"
          src="/images/common/circle.png"
        />
      </section>
    );
  }

  renderFounderDetails() {
    return (
      <section className="founder">
        <div className="founder__wrapper-left"></div>
        <div className="founder__wrapper-right">
          <img
            className="founder__image"
            alt="Founder"
            src="/images/landing/founder.png"
          />
          <img
            className="founder__image-circle"
            alt="circle"
            src="/images/common/circle-colored.png"
          />
        </div>
        <div className="wrapper founder__container">
          <div className="founder__left">
            <div className="founder__title section-title">
              About Our Founder
            </div>
            <div className="founder__name">DR. PRIYANKA REDDY</div>
            <p className="founder__info">
              Dr. Priyanka Reddy (M.B.B.S, M.D;D.V.L, Fellowship in Cosmetology
              from the USA) is a renowned dermatologist, cosmetologist, and
              trichologist in Bangalore. She is the founder of DNA Skin Clinic
              and Wellness Center. After completing her M.D., she extended her
              training in cosmetology under many highly experienced doctors in
              the United States, in treatments related to injectables (botox,
              fillers) and anti-aging. Dr. Priyanka is also trained in various
              lasers technologies. She has a keen eye for aesthetics and
              believes in a holistic approach to healthy skin, body, and mind.
            </p>
            <div className="founder__follow">Follow Dr. Priyanka:</div>
            <a
              target="_blank"
              href="https://www.instagram.com/drpriyankareddy/"
              className="founder__insta-wrapper"
            >
              <img
                src="/images/common/instagram-colored.png"
                alt="insta"
                className="founder__insta-logo"
              />
              <div className="founder__insta">drpriyankareddy</div>
            </a>
            <img
              src="/images/landing/s-shape.png"
              alt="insta"
              className="founder__s-shape"
            />
          </div>
          <div className="founder__right"></div>
        </div>
      </section>
    );
  }

  renderStoryVideo() {
    return (
      <div className="our-story__video-player-wrapper">
        <img
          className="our-story__top"
          alt="DNA Skin"
          src="/images/common/circle-gray.png"
        />
        <VideoWithCenterPlay
          url="https://www.youtube.com/watch?v=eAQIqSUcZK8"
          thumbnail="https://img.youtube.com/vi/eAQIqSUcZK8/maxresdefault.jpg"
        />
        <img
          className="our-story__bottom"
          alt="DNA Skin"
          src="/images/common/circle-gray.png"
        />
      </div>
    );
  }

  renderOurStory() {
    return (
      <section className="our-story wrapper">
        <div className="our-story__title section-title">Our Story</div>
        <p className="our-story__content">
          At DNA, honesty, ethical practice, patient’s services and mutual
          respect are the main pillars that drive us. We put our patients first
          and always come up with tailor-made solutions and treatments.
        </p>
        <PrimaryButton text="Know More" className="our-story__know-more" />
        {this.renderStoryVideo()}
      </section>
    );
  }

  renderTestimonials() {
    return (
      <section className="testimonials-container">
        <div className="wrapper">
          <div className="testimonials">
            <div className="testimonials__title section-title">
              Testimonials
            </div>
            <div className="testimonials__videos-wrapper">
              {_map(TESTIMONIAL_VIDEOS, (video) => (
                <VideoWithTitle {...video} />
              ))}
            </div>
            <Link to="/testimonials"><PrimaryButton text="More Videos" className="testimonials__more-video" /></Link>
          </div>
        </div>
      </section>
    );
  }

  renderRatingsAndReviews() {
    return (
      <section className="ratings wrapper">
        <p className="ratings__title section-title">Ratings and Reviews</p>
        <div className="rating__cards">
          {_map(RATING_DETAILS, (rating) => (
            <RatingsCard {...rating} />
          ))}
        </div>
        <ReviewCarousel />
      </section>
    );
  }

  renderAppointmentForm() {
    return (
      <section className="wrapper form-wrapper">
        <AppointmentForm />
      </section>
    );
  }

  renderMobileView() {
    return (
      <Layout>
        {this.renderMobileMainBanner()}
        {this.renderAwards()}
        {this.renderServicesWeOffer()}
        {this.renderAppointmentForm()}
        {this.renderFounderDetails()}
        {this.renderOurStory()}
        {this.renderTestimonials()}
        {this.renderRatingsAndReviews()}
      </Layout>
    );
  }

  render() {
    const isMobile = isMobileDevice();
    if (isMobile) return this.renderMobileView();

    return (
      <Layout>
        {this.renderMainBanner()}
        {this.renderAwards()}
        {this.renderServicesWeOffer()}
        {this.renderAppointmentForm()}
        {this.renderFounderDetails()}
        {this.renderOurStory()}
        {this.renderTestimonials()}
        {this.renderRatingsAndReviews()}
      </Layout>
    );
  }
}

export default Home;
