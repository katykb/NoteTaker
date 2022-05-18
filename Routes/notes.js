const app = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

// const req = require('express/lib/request');
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

app.get("/", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(db);
});

//POST route for a new note
app.post("/", (req, res) => {
  console.log(req.body);

  const { text, title } = req.body;

  const newText = {
    title,
    text,
    id: uuidv4(),
  };

  console.log(newText);
  db.push(newText);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), (error) => {
    {
      if (error) throw error;
    }
  });
  res.json(db);
});

app.delete("/:id", (req, res) => {
  let temp = [];
  for (let i = 0; i < db.length; i++) {
    if (db[i].id != req.params.id) {
      temp.push(db[i]);
    }
  }
  db = temp;

  fs.writeFileSync("./db/db.json", JSON.stringify(db), (error) => {
    {
      if (error) throw error;
    }
  });
  res.json(db);
});

module.exports = app;
