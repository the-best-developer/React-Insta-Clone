import React, { Component } from 'react';
import './CommentContainer.css';
import PropTypes from 'prop-types';

class CommentContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentData: this.props.postData.comments,
            commentValue: ''
        }

        this.newCommentSubmit = this.newCommentSubmit.bind(this);
        this.newCommentChange = this.newCommentChange.bind(this);
    }

    newCommentSubmit(event) {
        let newComment = this.state.commentData;
        console.log(newComment);
        newComment.push({id: (Date.now()).toString(), username: "Batman", text: this.state.commentValue});
        this.setState({commentData: newComment})
        event.preventDefault();
      }
    
      newCommentChange(event) {
        this.setState({commentValue: event.target.value});
      }
    
    render() {
        return (
            <div className="commentContainer">
                {/* Action Icons */}
                <div className="actionIcons">
                    <span><b>{this.props.postData.likes} likes</b></span>
                </div>
                
                {/* Comment section */}
                <div className="comments">
                    {this.state.commentData.map(comment => {
                        return (
                            <div key={comment.id}>
                                <b>{comment.username}</b> {comment.text}
                            </div>
                        )
                    })}
                </div>

                <div className="timeStamp">
                    {this.props.postData.timestamp}
                </div>

                <hr/>

                <div className="newComment">
                    <form onSubmit={this.newCommentSubmit}>
                        <input className="commentBox" type="text" value={this.commentValue} onChange={this.newCommentChange} />
                    </form>
                </div>
            </div>
        )
    }
}

CommentContainer.propTypes = {
    postData: PropTypes.shape({
      username: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  };  


export default CommentContainer;