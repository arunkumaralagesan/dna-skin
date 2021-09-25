import _get from 'lodash/get';

export const EMAIL_REGEX =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isValidEmail = email => EMAIL_REGEX.test(email);

export const validateFormHelper = ({ formValues, displayError }) => {
  if (!displayError) return {};

  const formErrors = {};
  const name = _get(formValues, "person_name");
  const phone = _get(formValues, "phone_number");
  const date = _get(formValues, "date");
  const email = _get(formValues, "email");
  const appointment = _get(formValues, "appointment");

  if (!name) formErrors.person_name = "This filed is mandatory";
  if (phone) {
    if (phone.length !== 10)
      formErrors.phone_number = "Phone number is not valid";
  } else {
    formErrors.phone_number = "This filed is mandatory";
  }

  if (email) {       
    const isValid = isValidEmail(email);
    if (!isValid) formErrors.email = "Email is not valid";
  } else {
    formErrors.email = "This filed is mandatory";
  }

  if (!date || !appointment) {
    formErrors.date_appointment = "This filed is mandatory";
  }
  return formErrors;
};


export const validateFormHelperPromise = ({ formValues, displayError }) => {
  if (!displayError) return Promise.resolve({});
  
  const formErrors = {};
  const name = _get(formValues, "person_name");
  const phone = _get(formValues, "phone_number");
  const date = _get(formValues, "date");
  const email = _get(formValues, "email");
  const appointment = _get(formValues, "appointment");

  if (!name) formErrors.person_name = "This filed is mandatory";
  if (phone) {
    if (phone.length !== 10)
      formErrors.phone_number = "Phone number is not valid";
  } else {
    formErrors.phone_number = "This filed is mandatory";
  }

  if (email) {       
    const isValid = isValidEmail(email);
    if (!isValid) formErrors.email = "Email is not valid";
  } else {
    formErrors.email = "This filed is mandatory";
  }

  if (!date || !appointment) {
    formErrors.date_appointment = "This filed is mandatory";
  }
  return Promise.resolve(formErrors);
};