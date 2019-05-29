import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Navigation from './components/SearchBar/Navigation.js';
import PostContainer from './components/PostContainer/PostContainer.js';

// Examples used from reactjs.org

class App extends Component {

  constructor() {
    super();
    this.state = {searchValue: ''};
    
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  searchSubmitHandler(event) {
    alert('Searched for: ' + this.state.searchValue);
    event.preventDefault();
  }

  searchChangeHandler(event) {
    this.setState({searchValue: event.target.value});
  }

  render() {

    return (
      <div className="App">

        {/* Navigation bar */}
        <Navigation searchValue={this.state.searchValue} searchSubmit={this.searchSubmitHandler} searchChange={this.searchChangeHandler} />
        
        {/* Iterate through dummyData array and build PostContainer component using post data */}
        {dummyData.map(post => {
          return (<PostContainer key={post.id} postData={post} />)
        })}

      </div>
    );
  }
}

export default App;
