import React from 'react';
import './CommentContainer.css';
import PropTypes from 'prop-types';

const CommentContainer = props => {
    
    return (
        <div className="commentContainer">
            {/* Action Icons */}
            <div className="actionIcons">
                <span><b>{props.postData.likes} likes</b></span>
            </div>
            
            {/* Comment section */}
            <div className="comments">
                {props.postData.comments.map(comment => {
                    return (
                        <span key={comment.id}>
                            <b>{comment.username}</b> {comment.text}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

CommentContainer.propTypes = {
    postData: PropTypes.shape({
      username: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  };  


export default CommentContainer;