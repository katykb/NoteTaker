const texts = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')

texts.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parese(data)));
});

//POST route for a new note
texts.post('/', (req, res) => {
    console.log(req.body);

    const {id, text} = req.body;

    if (req.body){
        const newText = {
            id,
            text,
            //???????????
            note_id: 

        }

        readAndAppend(newNote, './db/notes.json');
        res.json(`Text added successfully`)
    }else {
        res.error('Error in adding text');
    }
})