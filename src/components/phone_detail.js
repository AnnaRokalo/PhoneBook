import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deletePhone } from '../actions/index';
import {Link} from 'react-router';

class PhoneShow extends Component {
  static contextTypes = {
    router: PropTypes.object,
    params: PropTypes.object,
    phones: PropTypes.array
  };

  onDeleteClick() {
    this.props.deletePhone(this.props.params.id);
    this.context.router.push('/');
  }


  render() {
    const phone = this.props.phones.find(x => x.id === parseInt(this.props.params.id));

    if(!phone) {
      return <div>Loading...</div>
    }
    const imgUrl = (phone.img === '') ? '' : phone.img;
    const bgImage = imgUrl ? 'url(' + imgUrl + ')' : 'url(/images/icon-user-no-border.svg)';
    return (
      <div className="page">
        <div className="top-bar top-bar--reverse">
          <Link to="/" className="btn btn-back"> </Link>
        </div>
        <div className="card">
          <div className="user__icon user__icon--big" style={{backgroundImage: bgImage}}> </div>
          <button onClick={this.onDeleteClick.bind(this)} className="card__btn btn__delete"> </button>
          <div className="card__name">{phone.Name}</div>
          <div className="card__phone">{phone.phoneNumber}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { phones: state.phones.all };
}

export default connect(mapStateToProps, {deletePhone})(PhoneShow);