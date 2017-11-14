import React, { PureComponent } from "react";
import Comment from "./Comment.js";

let commentId = 0;

function setCommentId() {
  commentId += 1;
  return commentId;
}

class NewsPost extends PureComponent {
  state = {
    commentInput: "",
    comments: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13 && this.state.commentsInput !== "") {
      const { commentInput, comments } = this.state;
      const commentAdd = { text: commentInput, id: setCommentId() };
      this.setState({ commentInput: "", comments: [...comments, commentAdd] });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { text } = this.props;
    const { commentInput, comments } = this.state;
    return (
      <div>
        <p>{text}</p>
        <input
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
        />
        <div>
          {comments.map(comment => (
            <Comment
              text={comment.text}
              key={comment.id}
              onDelete={this.handleDelete}
              id={comment.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsPost;
