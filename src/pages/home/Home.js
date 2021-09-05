/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import _map from "lodash/map";
import Layout from "../../components/organisms/layout";

import PrimaryButton from "../../components/atoms/buttons/primary";
import Awards from "../../components/molecules/awards";
import ServicesCard from "../../components/molecules/awards/servicesCard/ServicesCard";

import { SERVICES } from "./constants";

import "./home.css";

class Home extends Component {
  renderMainBanner() {
    const titleMain = "Don’t miss out on our holistic programmes,";
    const titleSecond = "DNA360 is now live!";
    const shortContent =
      "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor.";
    const content =
      "Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor. incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ";
    return (
      <section className="main-banner wrapper">
        <div className="main-banner__left">
          <p className="main-banner--dark">{titleMain}</p>
          <p className="main-banner--green">{titleSecond}</p>
          <p className="main-banner--content">{shortContent}</p>
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

  renderAwards() {
    return (
      <section className="awards wrapper">
        <p className="awards__title">Awards And Recognitions</p>
        <p className="awards__content">
          When Clients Come First, Awards Follow
        </p>
        <div className="awards__images">
          <Awards
            url="/images/landing/global-business.png"
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
    return (
      <section className="services-container">
        <div className="services wrapper">
          <p className="services__title">Services We Offer</p>
          <div className="services__cards">
            {_map(SERVICES, (service) => (
              <ServicesCard {...service} />
            ))}
          </div>
          <PrimaryButton text="View All" className="services__view-all" />
        </div>
        <img
          className="services__half-top"
          alt="DNA Skin"
          src="/images/common/circle-half-top.png"
        />
        <img
          className="services__half-bottom"
          alt="DNA Skin"
          src="/images/common/circle-half-top.png"
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
            src="/images/landing/award-stamp.png"
          />
        </div>
        <div className="wrapper founder__container">
          <div className="founder__left">
            <p className="founder__title">About Our Founder</p>
            <p className="founder__name">DR. PRIYANKA REDDY</p>
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
            <p className="founder__follow">Follow Dr. Priyanka:</p>
            <a
              target="_blank"
              href="https://www.instagram.com/drpriyankareddy/"
              className="founder__insta-wrapper"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                alt="insta"
                className="founder__insta-logo"
              />
              <p className="founder__insta">drpriyankareddy</p>
            </a>
          </div>
          <div className="founder__right"></div>
        </div>
      </section>
    );
  }

  renderOurStory() {
    return (
      <section className="our-story wrapper">
        <p className="our-story__title">Our Story</p>
        <p class="our-story__content">
          At DNA, honesty, ethical practice, patient’s services and mutual
          respect are the main pillars that drive us. We put our patients first
          and always come up with tailor-made solutions and treatments.
        </p>
        <PrimaryButton text="Know More" className="our-story__know-more" />
      </section>
    );
  }
  render() {
    return (
      <Layout>
        {this.renderMainBanner()}
        {this.renderAwards()}
        {this.renderServicesWeOffer()}
        {/* {this.renderAppointmentForm()} */}
        {this.renderFounderDetails()}
        {this.renderOurStory()}
        {/* {this.renderTestimonials()}
        {this.renderRatingsAndReviews()} */}
      </Layout>
    );
  }
}

export default Home;
