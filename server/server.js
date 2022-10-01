const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
