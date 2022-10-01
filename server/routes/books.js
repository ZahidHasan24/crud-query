const express = require("express");
const router = express.Router();

const idlength = 8;

const DELAY = 1000;

router.get("/", (req, res) => {
  const books = req.app.db.get("books");

  setTimeout(() => {
    res.send(books);
  }, DELAY);
});

module.exports = router;
