import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { fetchPhone } from '../actions/index';
import {bindActionCreators} from 'redux';

class PhonesList extends Component {
  renderList() {
    return this.props.phones.map((phone) => {
      const imgUrl = (phone.img === '') ? '' : phone.img;
      const bgImage = imgUrl ? 'url(' + imgUrl + ')' : 'url(./images/icon-user-no-border.svg)';
      return (
        <li key={phone.id} onClick={() => this.props.fetchPhone(phone)}>
          <Link to={ "phones/" + phone.id } className="phones-list__item" >
            <div className="user__icon" style={{backgroundImage: bgImage}}> </div>
            <div className="phones-list__info">
              <div className="phones-list__name">{phone.Name}</div>
              <div className="phones-list__phone">{phone.phoneNumber}</div>
            </div>
            <div className="phones-list__bar">
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
          <Link to="/phones/new" className="btn btn-add-phone"> </Link>
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPhone: fetchPhone}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);