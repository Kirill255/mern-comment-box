import React from "react";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import DATA from "../data";

import "./CommentBox.css";

const CommentBox = () => (
  <div className="container">
    <div className="comments">
      <h2>Comments:</h2>
      <CommentList data={DATA} />
    </div>
    
    <div className="form">
      <CommentForm />
    </div>
  </div>
);

export default CommentBox;
