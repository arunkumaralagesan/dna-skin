import React, { Component } from "react";
import Layout from "../../components/organisms/layout";
import ServiceItem from "../../components/organisms/serviceItem";
import {
  TITLE,
  SUB_TITLE,
  BANNER_IMAGE_URL,
  BODY_CONTENT,
} from "../../constants/services/fatAndCellulite";

class FatAndCellulite extends Component {
  render() {
    return (
      <Layout>
        <ServiceItem
          title={TITLE}
          subTitle={SUB_TITLE}
          url={BANNER_IMAGE_URL}
          bodyContent={BODY_CONTENT}
        />
      </Layout>
    );
  }
}

export default FatAndCellulite;
