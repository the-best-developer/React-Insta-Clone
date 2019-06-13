import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentContainer from '../CommentSection/CommentContainer.js';

const PostContainer = props => {
    
    return (
        <div className="postContainer">
            {/* Icon and Username */}
            <div className="userThumb">
                <img src={"https://instagram.fbna1-1.fna.fbcdn.net/vp/b8e8638970a7174d9808aa38f7d980fe/5D991609/t51.2885-19/s150x150/49637385_2000492713584306_1377887545064423424_n.jpg?_nc_ht=instagram.fbna1-1.fna.fbcdn.net"} alt=""></img>
                <span>{props.postData.username}</span>
            </div>
            
            {/* Picture */}
            <img src={"https://instagram.fbna1-1.fna.fbcdn.net/vp/6d04b3108c8ce2aa3f17a73f2ca415f1/5D9A6C1E/t51.2885-15/sh0.08/e35/p640x640/59897326_1206793329500987_4303268409379083393_n.jpg?_nc_ht=instagram.fbna1-1.fna.fbcdn.net"} alt=""></img>

            {/* Comment section */}
            <CommentContainer postData={props.postData} newCommentChange={props.newCommentChange} newCommentSubmit={props.newCommentSubmit} likedHandler={props.likedHandler}/>
        </div>
    )
};

PostContainer.propTypes = {
    postData: PropTypes.shape({
      username: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
};


export default PostContainer;