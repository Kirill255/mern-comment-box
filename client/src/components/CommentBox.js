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
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          setError(res.error);
        } else {
          setData(res.data);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !text) return;
    // сначала обновляем нашу data, чтобы сразу же отобразить новый коммент, _id произвольный, через 2c сработает setInterval и подтянутся новые данные с сервера, с уже сервером(базой) установленным _id
    const newComments = [...data, { _id: Date.now().toString(), author, text }];
    setData(newComments);

    fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, text })
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          setError(res.error.message || res.error);
        } else {
          // успешно отправлено
          setAuthor("");
          setText("");
          setError(null);
        }
      });
  };

  const handleChangeAuthor = (e) => setAuthor(e.target.value);
  const handleChangeText = (e) => setText(e.target.value);

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
        <CommentForm
          author={author}
          text={text}
          handleSubmit={handleSubmit}
          handleChangeAuthor={handleChangeAuthor}
          handleChangeText={handleChangeText}
        />
      </div>

      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentBox;
