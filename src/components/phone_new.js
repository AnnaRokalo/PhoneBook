import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPhone } from '../actions/index';
import {Link} from 'react-router';
import _ from 'lodash';

const FIELDS = {
  Name: {
    type: 'input',
    label: 'Name of contact'
  },
  phoneNumber: {
    type: 'tel',
    label: 'Phone number'
  }
};

class PhoneNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log(props);
    // this.props.createPhone(props)
    //   .then( () => {
    //     this.context.router.push('/');
    //   });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control"  {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-submit"> </button>
        <Link to="/" className="btn btn-back"> </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });
  return errors;
}

export default reduxForm({
  //config redux form
  form: 'PhoneNewForm',
  fields: _.keys(FIELDS), //lodash helper wich returns array of keys our config object FIELDS
  validate
}, null, {createPhone})(PhoneNew);


