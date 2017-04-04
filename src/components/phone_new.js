import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import {Link} from 'react-router';
import { createPhone } from '../actions/index';

class PhoneNew extends Component {
  render() {

    return (
      <form className="page" >
        <div className="top-bar">
          <Link to="/" className="btn btn-back"> </Link>
          <h3 className="top-bar__title">Create a new contact</h3>
          <button type="submit" className="btn btn-submit"> </button>
        </div>
        <div className="form__main">
          <div className="form__group">
            <label>Name</label>
            <input type="text" className="form__textbox" {...name}/>
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" className="form__textbox" {...phoneNumber}/>
          </div>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PhoneNewForm',
  fields: ['name', 'phoneNumber']
}, null, { createPhone })(PhoneNew);