import React, { Component } from "react";

import _get from "lodash/get";
import { DatePicker, Select } from "antd";
import { message, Button, Space } from "antd";

import { isMobileDevice } from "../../../../helpers/utils";

import { PHONES } from "../../../../constants/general";
import "./appointmentForm.css";
import { validateFormHelper } from "./appointmentForm.helpers";
import { sendMailNotification } from '../../../../helpers/email';

const { Option } = Select;

export class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        date: "",
        myKey: Math.random() * 100,
      },
      displayError: false,
      formErrors: {},
    };
  }

  renderError = (key) => {
    const { displayError, formErrors } = this.state;
    if (!displayError || !formErrors[key]) return null;

    return <div className="input-error">*{formErrors[key]}</div>;
  };

  renderInputFiled(name, key, type = "text", required = false) {
    const { formValues } = this.state;
    return (
      <div className="input-field-wrapper">
        <input
          className="input input-field"
          type={type}
          name={name}
          placeholder={name}
          required={required}
          value={formValues[key]}
          onChange={(evt) =>
            this.setState(
              {
                formValues: { ...formValues, [key]: evt.target.value },
              },
              () => this.validateForm()
            )
          }
        />
        {this.renderError(key)}
      </div>
    );
  }

  renderPhone() {
    const { formValues } = this.state;
    return (
      <div className="input-field-wrapper">
        <input
          className="input input-field"
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          maxlength="10"
          value={formValues.phone_number}
          onChange={(evt) => {
            const phone = evt.target.value;
            this.setState(
              {
                formValues: {
                  ...formValues,
                  phone_number: isNaN(phone)
                    ? formValues.phone_number || ""
                    : evt.target.value,
                },
              },
              () => this.validateForm()
            );
          }}
        />
        {this.renderError("phone_number")}
      </div>
    );
  }

  disabledDate(current) {
    return current && current.valueOf() < Date.now();
  }

  renderSelectAndDate() {
    const { formValues, myKey } = this.state;
    return (
      <div className="form__row">
        {this.renderInputFiled("Email address", "email")}
        <div className="input-field-wrapper">
          <div className="form__date-and-select">
            <DatePicker
              key={myKey}
              disabledDate={this.disabledDate}
              onChange={(evt, dateString) =>
                this.setState(
                  {
                    formValues: { ...formValues, date: dateString },
                  },
                  () => this.validateForm()
                )
              }
              className="form__date-picker"
              format="DD/MM/YYYY"
            />
            <div className="form__date-separator"></div>
            <Select
              bordered={false}
              placeholder="Treatment"
              dropdownClassName="form__appointment-select"
              value={formValues?.appointment}
              style={{ width: 150 }}
              onChange={(val) =>
                this.setState(
                  {
                    formValues: { ...formValues, appointment: val },
                  },
                  () => this.validateForm()
                )
              }
            >
              <Option value="Skin">Skin</Option>
              <Option value="Hair">Hair</Option>
              <Option value="Body">Body</Option>
            </Select>
          </div>
          {this.renderError("date_appointment")}
        </div>
      </div>
    );
  }

  validateForm = () => {
    const { formValues, displayError } = this.state;
    const formErrors = validateFormHelper({ formValues, displayError });
    this.setState({ formErrors });
  };

  handleSubmit = (event) => {
    return false;
    event.preventDefault();
    event.stopPropagation();
    this.setState({ displayError: true });
    const { formValues } = this.state;

    const formErrors = validateFormHelper({ formValues, displayError: true });

    if (Object.values(formErrors).some((value) => value)) {
      this.setState({ formErrors });
      return;
    } else if (Object.values(formValues).every((value) => value)) {
      const name = _get(formValues, "person_name");
      const phone = _get(formValues, "phone_number");
      const date = _get(formValues, "date");
      const appointment = _get(formValues, "appointment");
      const query = _get(formValues, "query");
      const email = _get(formValues, "email");

      const request = {
        name,
        phone,
        date,
        email,
        treatment: appointment,
        contact_mobile: phone,
        query,
      };
      this.setState({ formLoading: true });
      sendMailNotification(request).then(() => {
        message.success({
          content: "Registeration success",
          className: "custom-class",
          style: {
            marginTop: "10vh",
          },
        });
        this.setState({
          formValues: {
            person_name: "",
            phone_number: "",
            email: "",
            date: "",
            appointment: "",
            query: "",
            formErrors: {},
            displayError: false,
          },
          formLoading: false,
          myKey: Math.random() * 100,
          displayError: false,
        });
      })
      .catch(() => {
        this.setState({ formLoading: false });
      });
    }
  };

  render() {
    const { formValues, formLoading } = this.state;
    const isMobile = isMobileDevice();
    return (
      <div className="form-container" id="appointment-form">
        <div className="form__title section-title">Request an Appointment</div>
        <div className="form__contact">
          Call Us:- <span>{`+91 ` + PHONES.ONE}</span>
          {!isMobile && <span> {`, +91 ` + PHONES.TWO} </span>}
        </div>
        <form
          id="ContactusForm"
          name="contact-form1"
          className="appointment-form"
        >
          <div className="form__row">
            {this.renderInputFiled("Name", "person_name")}
            {this.renderPhone()}
          </div>
          {this.renderSelectAndDate()}
          <textarea
            className="textarea"
            name="query"
            id="query"
            cols="20"
            placeholder="Query/Message"
            rows="3"
            value={formValues?.query}
            onChange={(evt) =>
              this.setState({
                formValues: { ...formValues, query: evt.target.value },
              })
            }
          ></textarea>
          <Button
            className="primary-button send-request"
            value="Submit"
            type="primary"
            onClick={this.handleSubmit}
            loading={formLoading}
          >
            Send Request
          </Button>
        </form>
        <Space></Space>
      </div>
    );
  }
}

export default AppointmentForm;
