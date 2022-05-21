import React, { Component } from "react";
import Layout from "../../components/organisms/layout";
import { PARA_1, PARA_2 } from './constants';
import './termsAndConditions.css';

class TermsAndConditions extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderContent() {
    return (
      <div class="terms__content wrapper">
        <p>{PARA_1}</p>
        <p>{PARA_2}</p>
      </div>
    );
  }


  renderTitle() {
    return (
      <div class="sub-page-title wrapper">
          Terms And Conditions
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

export default TermsAndConditions;
