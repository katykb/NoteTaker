const fb = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


fb.get('/', (req, res) =>
  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)))
);

fb.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { email, feedbackType, feedback } = req.body;
});