import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage.js';
import withAuthenticate from './components/authentication/withAuthenticate.js';
import LoginPage from './components/Login/Login.js';

// Examples used from reactjs.org

class App extends Component {

  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage);
      return (
        <div className="App">

          <ComponentFromWithAuthenticate/>

        </div>
      );
    }
}

export default App;
