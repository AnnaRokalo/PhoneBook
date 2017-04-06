import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { createPhone } from '../actions/index';
import { connect } from 'react-redux';


class PhoneNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  state = {
      contactName: '',
      phoneNumber: '',
      img: '/images/icon-user-no-border.svg',
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhone(this.state);
    this.context.router.push('/');
  }

    selectPhoto(input) {

        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => this.setState({'img': e.target.result});
            reader.readAsDataURL(input.files[0]);
        }
    }


    isValid() {
      return this.state.contactName && this.state.phoneNumber;
    }

  render() {
    return (
      <form model="addPhone" onSubmit={(e) => { this.handleSubmit(e)}}  className="page" >
        <div className="top-bar">
          <Link to="/" className="btn btn-back"> </Link>
          <h3 className="top-bar__title">Create a new contact</h3>
          <button type="submit" className="btn btn-submit" disabled={!this.isValid() ? true : false}> </button>
        </div>
        <div className="form__main">
          <div className="form__group">
            <label>Contact Name</label>
            <input className="form__textbox" value={this.state.contactName} onChange={(e) => this.setState({contactName: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input className="form__textbox" value={this.state.phoneNumber} onChange={(e) => this.setState({phoneNumber: e.target.value})} />
          </div>
          <input type='file' onChange={e => this.selectPhoto(e.target)}/>
          <img src={this.state.img}/>
        </div>
      </form>
    );
  }
}

export default connect(null, {createPhone})(PhoneNew);