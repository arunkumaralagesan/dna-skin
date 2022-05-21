import React, { Component } from "react";
import Layout from "../../components/organisms/layout";
import './privacyPolicy.css';

import { PRIVACY_CHANGES, PRIVACY_COOKIES, PRIVACY_INTRO, PRIVACY_KYC } from './constants';

class PrivacyPolicy extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  renderContent() {
    return (
      <div class="privacy__content wrapper">
         <p>{PRIVACY_INTRO}</p>
          <div class="panel-body">
                <p>DNA Skin Clinic generally collects personally identifying information with your specific knowledge and consent. Optional information such as your age or gender may also be requested.</p>
                <p>DNA Skin Clinic uses this information to provide you with the service you have requested. We may also use the information to communicate with you about new features, products or services, or to improve the services that we offer by tailoring them to your needs.</p>
                <p>DNA Skin Clinic does not sell it’s users’ e-mail addresses. However, unless otherwise specified, we may share e-mail addresses and sell or share all other information with our affiliates and with carefully selected companies who we think can offer you services and products of interest to you. If you do not wish to have your information shared, please contact us. If you do not wish to receive communications from us, simply follow the unsubscribe instructions contained within the e-mail. If you’ve registered on any part of <a href="/">www.dnaskinclinic.in</a>, you may also change or update your member preferences or information within any section of the site where you have signed up, registered or created any type of account.</p>
                <p>We also allow access to our database by third parties that provide us with services, such as technical maintenance or forums and job search software, but only for the purpose of and to the extent necessary to provide those services. We may also provide your information to our advertisers so that they can serve ads to you that meet your needs or match your interests. While DNA Skin Clinic will seek to require such third parties to follow appropriate privacy policies and will not authorize them to use this information except for the express purpose for which it is provided, DNA Skin Clinic does not bear any responsibility for any actions or policies of third parties. There may also be occasion when we are legally required to provide access to our database in order to cooperate with police investigations or other legal proceedings. In those instances, the information is provided only for that purpose.</p>
            </div>
            <div class="panel-body">
                <p>You may have read about “cookies,” nuggets of information that are placed by a Website in a storage place on your own computer. We use cookies to control the display of ads, to track usage patterns on the site, to deliver editorial content, and to record registration and personalization information.</p>
                <p>For example, if you register on any part of <a href="/">www.dnaskinclinic.in</a>,&nbsp;you can opt to save your user name and password on your computer. We can provide this convenience by placing a cookie on your computer.</p>
                <p>Our cookies may contain personally identifiable information and such cookies may be shared with our affiliated companies.</p>
                <p>Some of our advertisers occasionally serve you cookies as well. We do not have control over cookies placed by advertisers.</p>
                <p>If you don’t want cookies, your Web browser likely includes an option that allows you to not accept them. However, if you set your browser to refuse cookies, some portions of <a href="/">www.dnaskinclinic.in,</a> may not function properly.</p>
                <p>While your individual information is protected as outlined above, we reserve the right to use aggregated, anonymous data about our users as a group for any business purpose, such as analyzing usage trends and seeking compatible advertisers and partners.</p>
            </div>
          <div class="panel-body">
                <p>On occasion, it may be necessary for us to change the terms of the Online Privacy Policy <a href="/">www.dnaskinclinic.in,</a> To ensure that you are aware of current privacy practices, we recommend that you check this site periodically. We will not materially change how we handle previously collected information without providing notice and choice as to how we use that information.</p>
            </div>
      </div>
    );
  }

  renderTitle() {
    return (
      <div class="sub-page-title wrapper">
          Privacy Policy
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

export default PrivacyPolicy;
