import React, { useState, useEffect, useRef } from "react";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

// import DATA from "../data";

import "./CommentBox.css";

const CommentBox = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const intervalRef = useRef();

  const loadCommentsFromServer = () => {
    fetch("/api/comments")
      .then((res) => res.json)
      .then((res) => {
        if (!res.success) {
          setError(res.error);
        } else {
          setData(res.data);
        }
      });
  };

  useEffect(() => {
    const id = setInterval(() => {
      loadCommentsFromServer();
    }, 2000);
    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <div className="comments">
        <h2>Comments:</h2>
        <CommentList data={data} />
      </div>

      <div className="form">
        <CommentForm author={author} text={text} />
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentBox;
