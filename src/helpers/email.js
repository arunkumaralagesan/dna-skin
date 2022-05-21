import emailjs from "emailjs-com";

const { REACT_APP_EMAIL_JS_SERVICE_ID, REACT_APP_EMAIL_JS_TEMPLATE_ID, REACT_APP_EMAIL_JS_USER_ID } = process.env;

export const sendMailNotification = req => {
  return emailjs.send(REACT_APP_EMAIL_JS_SERVICE_ID, REACT_APP_EMAIL_JS_TEMPLATE_ID, req, REACT_APP_EMAIL_JS_USER_ID);
}

