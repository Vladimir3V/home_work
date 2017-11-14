import React, {PureComponent} from 'react';


class Comment extends PureComponent {
  
    handleDelete = () => {
      const {id, onDelete} = this.props;
      onDelete(id);
    };
  
    render() {
      const { id, text } = this.props;
      return (
        <div data-id={id}>
        <p> {text} </p> 
        <span 
        className='delete' 
        onClick={this.handleDelete}>
        X
        </span>
        </div>
      )
    }
  }

export default Comment;
