import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    author: String,
    text: String
  },
  { timestamps: true } // https://mongoosejs.com/docs/guide#timestamps создаёт сразу оба поля createdAt и updatedAt
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
