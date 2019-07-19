import React from "react";
import PropTypes from "prop-types";

const CommentForm = ({ id, author, text }) => (
  <form onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      name="author"
      placeholder="Your name..."
      value={author}
      onChange={() => {}}
    />
    <input
      type="text"
      name="text"
      placeholder="Say something..."
      value={text}
      onChange={() => {}}
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
  text: PropTypes.string
};

export default CommentForm;
