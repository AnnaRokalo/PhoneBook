import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { fetchPhone } from '../actions/index';
import {bindActionCreators} from 'redux';

class PhonesList extends Component {
  renderList() {
    return this.props.phones.map((phone, i) => {
      return (
        <li key={i}
            onClick={() => this.props.fetchPhone(phone)}
            >
          <Link to={ "phonesList/" + phone.phoneNumber } className="phones-list__item">
            <div className="phones-list__icon">{phone.img ? '' : phone.img} </div>
            <div className="phones-list__info">
              <div className="phones-list__name">{phone.Name}</div>
              <div className="phones-list__phone">{phone.phoneNumber}</div>
            </div>
            <div className="phones-list__bar">
              {/*<span className="phones-list__edit"> </span>*/}
              <span className="phones-list__delete"> </span>
            </div>
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="page">
        <div className="top-bar">
          <div className="btn btn-add-phone"> </div>
        </div>
        <ul className="phones-list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {phones: state.phones};
}

export default connect(mapStateToProps, {fetchPhone})(PhonesList);