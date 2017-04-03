import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPhone } from '../actions/index';
import {Link} from 'react-router';

class PhoneShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const {phone} = this.props.phone;
    if(!phone) {
      return <div>Loading...</div>
    }
    const imgUrl = (phone.img === '') ? '' : phone.img;
    const bgImage = imgUrl ? 'url(' + imgUrl + ')' : 'url(./images/icon-user-no-border.svg)';
    return (
      <div className="page">
        <div className="top-bar top-bar--reverse">
          <Link to="/" className="btn btn-back"> </Link>
        </div>
        <div className="card">
          <div className="user__icon user__icon--big" style={{backgroundImage: bgImage}}> </div>
          <div className="card__name">{phone.Name}</div>
          <div className="card__phone">{phone.phoneNumber}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { phone: state.phone };
}

export default connect(mapStateToProps, {fetchPhone})(PhoneShow);