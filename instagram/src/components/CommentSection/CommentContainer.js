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
        this.checkLiked = this.checkLiked.bind(this);
    }

    newCommentSubmit(event) {
        let newComment = [...this.state.commentData]

        event.preventDefault();

        newComment.push({id: (Date.now()).toString(), username: "Batman", text: this.state.commentValue});
        this.setState({commentData: newComment})
    }
    
    newCommentChange(event) {
        this.setState({commentValue: event.target.value});
    }

    checkLiked() {
        if(this.props.postData.liked){
            return <i onClick={(event) => this.props.likedHandler(event, this.props.postData.id)} className="fas liked fa-heart fa-2x"></i>
        }
        else {
            return <i onClick={(event) => this.props.likedHandler(event, this.props.postData.id)} className="far fa-heart fa-2x"></i>
        }
    }
    
    render() {
        return (
            <div className="commentContainer">
                {/* Action Icons */}
                <div className="actionIcons">
                    <div className="commentLinks">

                        {this.checkLiked()}

                        <a onClick={(event) => this.props.likedHandler(event, this.props.postData.id)} href={"index.html"}><i className="far fa-comment fa-2x"></i></a>
                    </div>

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