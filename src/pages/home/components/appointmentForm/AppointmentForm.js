import React, { Component } from "react";
import _get from "lodash/get";
import { DatePicker, Select } from "antd";

import { isMobileDevice } from "../../../../helpers/utils";
import "./appointmentForm.css";
import { isValidEmail, validateFormHelper } from './appointmentForm.helpers';

const { Option } = Select;

export class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
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
            this.setState({
              formValues: { ...formValues, [key]: evt.target.value },
            }, () => this.validateForm())
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
            this.setState({
              formValues: {
                ...formValues,
                phone_number: isNaN(phone)
                  ? formValues.phone_number || ""
                  : evt.target.value,
              },
            }, () => this.validateForm());
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
    const { formValues } = this.state;
    return (
      <div className="form__row">
        {this.renderInputFiled("Email address", "email")}
        <div className="input-field-wrapper">
          <div className="form__date-and-select">
            <DatePicker
              disabledDate={this.disabledDate}
              onChange={(evt, dateString) =>
                this.setState({
                  formValues: { ...formValues, date: dateString },
                }, () => this.validateForm())
              }
              className="form__date-picker"
              format="DD/MM/YYYY"
            />
            <div className="form__date-separator"></div>
            <Select
              bordered={false}
              placeholder="Treatment"
              dropdownClassName="form__appointment-select"
              style={{ width: 150 }}
              onChange={val =>
                this.setState({
                  formValues: { ...formValues, appointment: val },
                }, () => this.validateForm())
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
    event.preventDefault();
    event.stopPropagation();
    this.setState({ displayError: true }, () => this.validateForm());
    
    const { formValues, formErrors } = this.state;
    if (Object.values(formErrors).some((value) => value)) {

    } else {
      const name = _get(formValues, "person_name");
      const phone = _get(formValues, "phone_number");
      const date = _get(formValues, "date");
      const appointment = _get(formValues, "appointment");
      const query = _get(formValues, "query");

      // handle Submit
    }
  };

  render() {
    const isMobile = isMobileDevice();
    const { formValues, formErrors } = this.state;
    console.log({ formErrors });
    // if (isMobile) return null;
    return (
      <div className="form-container">
        <div class="form__title">Request an Appointment</div>
        <div class="form__contact">
          Call Us:- +91 73380 10101, +91 73384 44555
        </div>
        <form
          id="ContactusForm"
          name="contact-form1"
          onSubmit={this.handleSubmit}
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
            onChange={(evt) =>
              this.setState({
                formValues: { ...formValues, query: evt.target.value },
              })
            }
          ></textarea>
          <button
            className="primary-button send-request"
            type="submit"
            value="Submit"
          >
            <strong>SEND REQUEST</strong>
          </button>
        </form>
      </div>
    );
  }
}

export default AppointmentForm;
