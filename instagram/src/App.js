import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';

function App() {

  return (
    <div className="App">

      {/* Navigation */}
      <div className="searchContainer">

        {dummyData.map(post => {
          return  (<div>
            <p>{post.id}</p>
            <p>{post.username}</p>
            <p>{post.likes}</p>
            <p>{post.timestamp}</p>
          </div>
          )
      })}

      </div>

      {/* Post */}
      <div className="postContainer">

        {/* Post text and comments */}
        <div className="commentContainer">

        </div>

      </div>

    </div>
  );
}

export default App;
