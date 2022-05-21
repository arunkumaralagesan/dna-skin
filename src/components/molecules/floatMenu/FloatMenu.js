import React from "react";
import "./floatMenu.css";

import { PHONES_WTIH_CODE } from "../../../constants/general";
const WHATS_APP_CONTACT = PHONES_WTIH_CODE.TWO;

function FloatMenu() {

  return (
    <div className="float-menu__wrapper">
      <div class="floating-icon">
        <a
          rel="noreferrer"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${WHATS_APP_CONTACT}&amp;text=Hi`}
          id="kenytWhatsappBubble"
          class="floating-icon-link"
        >
          <img alt="WhatsappLogo" src="/images/common/circle-whats-app.png" className="floating-logo" />
        </a>
      </div>
      <div class="floating-icon icon-margin">
        <a
          rel="noreferrer"
          target="_blank"
          href='https://www.instagram.com/dnaskinclinic_/'
          id="kenytWhatsappBubble"
          class="floating-icon-link"
        >
          <img alt="WhatsappLogo" src="/images/common/cirlce-insta.png" className="floating-logo" />
        </a>
      </div>
    </div>
  );
}

export default FloatMenu;
