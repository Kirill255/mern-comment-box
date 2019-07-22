import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import moment from "moment";

const Comment = ({ id, author, children, updatedAt, handleUpdateComment, handleDeleteComment }) => (
  <div className="singleComment">
    <img className="userImage" src={`https://picsum.photos/70?random=${id}`} alt="user_image" />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{author}</h3>
        <ReactMarkdown source={children} />
      </div>
      <div className="singleCommentButtons">
        <span className="time">{moment(updatedAt).fromNow()}</span>
        <a onClick={() => handleUpdateComment(id)}>Update</a>
        <a onClick={() => handleDeleteComment(id)}>Delete</a>
      </div>
    </div>
  </div>
);

Comment.defaultProps = {};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired, // text
  updatedAt: PropTypes.string.isRequired,
  handleUpdateComment: PropTypes.func,
  handleDeleteComment: PropTypes.func
};

export default Comment;
