import React from "react";
import PropTypes from "prop-types";

const CommentForm = ({ author, text, handleSubmit, handleChangeAuthor, handleChangeText }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="author"
      placeholder="Your name..."
      value={author}
      onChange={handleChangeAuthor}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={text}
      onChange={handleChangeText}
    />

    <button type="submit">Submit</button>
  </form>
);

CommentForm.defaultProps = {
  author: "",
  text: ""
};

CommentForm.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChangeAuthor: PropTypes.func,
  handleChangeText: PropTypes.func
};

export default CommentForm;
