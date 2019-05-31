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
                  dummyData: []
                 };
    
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
    this.likedHandler = this.likedHandler.bind(this);
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

  likedHandler(event, id) {
    let likedPost = [...this.state.dummyData];
    
    likedPost.forEach(post => {
      if (post.id === id) {
        if (post.liked) {
          post.liked = !post.liked;
          post.likes--;
        }
        else{
          post.liked = !post.liked;
          post.likes++;
        }
      }

    this.setState({dummyData: likedPost});
    });
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
              return (<PostContainer key={post.id} postData={post} newCommentChange={this.newCommentChangeHandler} newCommentSubmit={this.newCommentSubmitHandler} likedHandler={this.likedHandler} />)
            }
          }
          else if (!(this.state.searchValue)) {
              return (<PostContainer key={post.id} postData={post} newCommentChange={this.newCommentChangeHandler} newCommentSubmit={this.newCommentSubmitHandler} likedHandler={this.likedHandler} />)
          }
        })}

      </div>
    );
  }
}

export default App;
