import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Navigation from './components/SearchBar/Navigation.js';
import PostContainer from './components/PostContainer/PostContainer.js';

// Examples used from reactjs.org

class App extends Component {

  constructor() {
    super();
    this.state = {searchValue: '',
                  commentValue: '',
                  dummyData: []
                 };
    
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidMount() {
    console.log("component mounted!")
    this.setState({dummyData: dummyData});
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
        {this.state.dummyData.map(post => {
          if (this.state.searchValue) {
            if(post.username.includes(this.state.searchValue)) {
              return (<PostContainer key={post.id} postData={post} newCommentChange={this.newCommentChangeHandler} newCommentSubmit={this.newCommentSubmitHandler} />)
            }
          }
          else if (!(this.state.searchValue)) {
              return (<PostContainer key={post.id} postData={post} newCommentChange={this.newCommentChangeHandler} newCommentSubmit={this.newCommentSubmitHandler} />)
          }
        })}

      </div>
    );
  }
}

export default App;
