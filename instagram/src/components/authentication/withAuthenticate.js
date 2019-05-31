import React, { Component } from 'react';

const withAuthenticate = CompOne => CompTwo =>
  class extends Component {
    render() {
      let username = localStorage.getItem('username');
      if(username) {
        return <CompOne />
      }
      else {
        return <CompTwo />
      }
    }
  };

  export default withAuthenticate;