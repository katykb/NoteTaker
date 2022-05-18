const app = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const { uuid } = require("uuidv4");

// const req = require('express/lib/request');
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

app.get("/", (req, res) => {
  db = JSON.parse(fs.readFileSync("/db/db.json"));
  res.json(db);
});

//POST route for a new note
app.post("/", (req, res) => {
  console.log(req.body);

  const { text, title } = req.body;

  if (req.body) {
    const newText = {
      title,
      text,
      id: uuid(),
    };
  }
  console.log(newText);
  db.push(newText);
  fs.writeFileSync("/db/db.json", JSON.stringify(db), (error) => {
    {
      if (error) throw error;
    }
  });
  res.json(db);
});

module.exports = app;
