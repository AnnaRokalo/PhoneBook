import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { createPhone } from '../actions/index';
import { Control,  Form, actions } from 'react-redux-form';
import { connect } from 'react-redux';
const initialAddPhoneUserState = {
  contactName: '',
  phoneNumber: ''
};


class PhoneNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  handleSubmit(values) {
    this.props.createPhone(values);
      // .then( () => {
      //   this.context.router.push('/');
      // });
    this.context.router.push('/');
    actions.reset('addPhone');
  }

  render() {
    return (
      <Form model="addPhone" onSubmit={(values) => { this.handleSubmit(values)}}  className="page" >
        <div className="top-bar">
          <Link to="/" className="btn btn-back"> </Link>
          <h3 className="top-bar__title">Create a new contact</h3>
          <button type="submit" className="btn btn-submit"> </button>
        </div>
        <div className="form__main">
          <div className="form__group">
            <label>Contact Name</label>
            <Control.text  model="addPhone.contactName" className="form__textbox" />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <Control.text type="tel" model="addPhone.phoneNumber" className="form__textbox"/>
          </div>
        </div>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {phones: state.phones.all};
}

export default connect(mapStateToProps, {createPhone})(PhoneNew);