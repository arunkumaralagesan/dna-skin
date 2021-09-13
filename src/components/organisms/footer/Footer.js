import React from "react";
import _map from "lodash/map";
import { CLINIC, DISCOVER } from "./constants";
import "./footer.css";

function Footer() {
  const renderCopyRight = () => (
    <div className="copy-right">
      © 2021 DNA Skin Clinic. All rights reserved.
    </div>
  );

  const renderClinic = () => {
    return (
      <div>
        <p class="footer__title">Clinic</p>
        {_map(CLINIC, (item) => (
          <div className="footer_link">{item?.name}</div>
        ))}
      </div>
    );
  };

  const renderDiscover = () => {
    return (
      <div>
        <p class="footer__title">Discover</p>
        {_map(DISCOVER, (item) => (
          <div className="footer_link">{item?.name}</div>
        ))}
      </div>
    );
  };
  return (
    <section className="footer-wrapper">
      <footer className="footer wrapper">
        <div class="footer__links">{renderClinic()}{renderDiscover()}</div>
        {renderCopyRight()}
      </footer>
    </section>
  );
}

export default Footer;
