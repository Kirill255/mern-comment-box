import express from "express";

const router = express.Router();

// /api/
router.get("/", (req, res) => {
  res.send("respond with api endpoints"); // можно вернуть например список доступных эндпоинтов
});

// /api/comments
router.get("/comments", (req, res) => {
  res.send("respond with a comments");
});

export default router;
