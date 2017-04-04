import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';


class PhoneNew extends Component {
  render() {
    return (
      <form className="page">
        <div className="top-bar">
          <Link to="/" className="btn btn-back"> </Link>
          <h3 className="top-bar__title">Create a new phone number</h3>
          <button type="submit" className="btn btn-submit"> </button>
        </div>
        <div className="form__main">
          <div className="form__group">
            <label>Name</label>
            <input type="text" className="textbox" />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" className="textbox" />
          </div>
        </div>
      </form>
    );
  }
}
export default reduxForm({
  form: 'PhoneNewForm',
  fields: ['Name', 'Phone number']
})(PhoneNew);