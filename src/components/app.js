import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*React simple starter*/}
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
