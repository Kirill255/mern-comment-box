import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Comment = ({ id, author, children }) => (
  <div className="singleComment">
    <img className="userImage" src={`https://picsum.photos/70?random=${id}`} alt="user_image" />
    <div className="textContent">
      <div className="singleCommentContent">
        <h3>{author}</h3>
        <ReactMarkdown source={children} />
      </div>
      <div className="singleCommentButtons" />
    </div>
  </div>
);

Comment.defaultProps = {};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired // text
};

export default Comment;
