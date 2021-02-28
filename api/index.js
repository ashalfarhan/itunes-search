const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from serverMiddleware");
});

module.exports = {
  path: "/api",
  handler: app
};
