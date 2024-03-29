import express from "express";
import logger from "morgan";
import mongoose from "mongoose";

import { getSecret } from "./secrets";
import comments from "./routes/comments";
const API_PORT = getSecret("apiPort") || 3001; // порт сменил на 3001 т.к. react на 3000

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(getSecret("dbUrl"), {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const db = mongoose.connection;
/* eslint-disable */
db.on("error", (err) => console.log("Mongoose connection error: ", err));
db.on("connected", () => console.log("Mongoose connected"));
db.on("reconnected", () => console.log("Mongoose reconnected"));
db.on("disconnected", () => console.log("Mongoose disconnected"));

process.on("SIGINT", () => {
  db.close(() => {
    console.log("Mongoose default connection disconnected through app termination");
    process.exit(0);
  });
});
/* eslint-enable */

app.use(logger("dev"));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api", comments);

app.listen(API_PORT, () => {
  // eslint-disable-next-line
  console.log(`Example app listening on port ${API_PORT} -> http://localhost:${API_PORT}`);
});
