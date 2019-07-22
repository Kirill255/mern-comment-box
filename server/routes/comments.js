import express from "express";

import Comment from "../models/comment";

const router = express.Router();

// /api/
router.get("/", (req, res) => {
  res.send("respond with api endpoints"); // можно вернуть например список доступных эндпоинтов
});

// /api/comments
router.get("/comments", (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: comments });
  });
});

router.post("/comments", (req, res) => {
  const { author, text } = req.body;
  if (!author || !text) {
    return res.json({ success: false, error: "You must provide an author and comment" });
  }
  const comment = new Comment();
  comment.author = author;
  comment.text = text;
  // comment.save();
  comment.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.put("/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  if (!commentId) return res.json({ success: false, error: "No comment id provided" });
  Comment.findById(commentId, (err, comment) => {
    if (err) return res.json({ success: false, error: err });
    const { author, text } = req.body;
    if (author) comment.author = author;
    if (text) comment.text = text;
    comment.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
});

router.delete("/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  if (!commentId) return res.json({ success: false, error: "No comment id provided" });
  Comment.remove({ _id: commentId }, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

export default router;
