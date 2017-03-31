import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPhone } from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPhone(this.props.phone);
  }

  render() {
    console.log(this.props.phone);
    const {phone} = this.props.phone;
    if(!phone) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/" className="">Back to Phones</Link>
        <h4>{phone.Name}</h4>
        <h3>{phone.phoneNumber}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { phone: state.phone };
}

export default connect(mapStateToProps, { fetchPhone })(PostsShow);