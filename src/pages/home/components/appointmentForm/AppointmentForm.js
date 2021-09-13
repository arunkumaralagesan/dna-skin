import React, { Component } from "react";
import _get from 'lodash/get';
import { DatePicker, Select } from "antd";

import { isMobileDevice } from "../../../../helpers/utils";
import "./appointmentForm.css";

const { Option } = Select;

export class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {},
    };
  }

  renderInputFiled(name, key, type = "text", required = true) {
    const { formValues } = this.state;
    return (
      <input
        className="input input-field"
        type={type}
        name={name}
        placeholder={name}
        required={required}
        value={formValues[key]}
        onChange={evt => this.setState({ formValues: { ...formValues, [key]: evt.target.value }})}
      />
    );
  }

  renderPhone() {
    return (
      <input
        className="input input-field"
        type="number"
        name="phone_number"
        placeholder="Phone Number"
        min="1111111111"
        max="99999999999999"
        required
        value={this.state["phone_number"]}
      />
    );
  }

  renderSelectAndDate() {
    return (
      <div className="form__row">
        {this.renderInputFiled(
          "Email address",
          "email_address",
          "email",
          true
        )}
        <div className="form__date-and-select">
          <DatePicker
            onChange={(props) => console.log(props)}
            className="form__date-picker"
          />
          <div className="form__date-separator"></div>
          <Select
            bordered={false}
            placeholder="Treatment"
            dropdownClassName="form__appointment-select"
            style={{ width: 150 }}
            onChange={(props) => console.log(props)}
          >
            <Option value="Skin">Skin</Option>
            <Option value="Hair">Hair</Option>
            <Option value="Body">Body</Option>
          </Select>
        </div>
      </div>
    );
  }

  handleSubmit() {
    const { formValues } = this.state;
    const name = _get(formValues, 'person_name');
    const phone = _get(formValues, 'phone_number');
    const date = _get(formValues, 'date');
    const appointment = _get(formValues, 'appointment');
    const query = _get(formValues, 'query');
    if (name && phone && date && appointment && query) {

    }
  }

  render() {
    const isMobile = isMobileDevice();
    const { formValues } = this.state;
    console.log({ formValues })
    // if (isMobile) return null;
    return (
      <div className="form-container">
        <div class="form__title">
          Request an Appointment
        </div>
        <div class="form__contact">
          Call Us:- +91 73380 10101, +91 73384 44555
        </div>
        <form
          id="ContactusForm"
          name="contact-form1"
          onSubmit={this.handleSubmit}
          // action="thank-you?form=contact_form"
          // method="POST"
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
            onChange={evt => this.setState({ formValues: { ...formValues, query: evt.target.value }})}
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
