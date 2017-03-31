import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editPhone} from '../actions/index';
import {bindActionCreators} from 'redux';


class PhonesList extends Component {
  renderList() {
    return this.props.phones.map((phone, i) => {
      return (
        <li key={i} className="phones-list__item">
          {phone.Name}
          {phone.phoneNumber}
        </li>
      );
    });
  }
  render() {
    return (
      <div className="page">
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
  //Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({phoneNumber: editPhone}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);