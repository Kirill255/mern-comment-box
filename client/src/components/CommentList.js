import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

const CommentList = ({ data, handleUpdateComment, handleDeleteComment }) => {
  const commentNodes = data.map((comment) => (
    <Comment
      key={comment._id}
      id={comment._id}
      author={comment.author}
      updatedAt={comment.updatedAt}
      handleUpdateComment={handleUpdateComment}
      handleDeleteComment={handleDeleteComment}
    >
      {comment.text}
    </Comment>
  ));

  return <div>{commentNodes}</div>;
};

CommentList.defaultProps = {
  data: []
};

CommentList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
      updatedAt: PropTypes.string
    })
  ),
  handleUpdateComment: PropTypes.func,
  handleDeleteComment: PropTypes.func
};

export default CommentList;
