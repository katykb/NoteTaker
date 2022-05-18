const app = require("express").Router();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});
//POST route for a new note
module.exports = app;