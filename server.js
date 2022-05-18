const express = require('express');
const fs = require('fs')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);

app.get('*', (req, res) =>
res.sendFile(path.join(__dirnam, '/index.html'))
);

app.get('/', [
    function (req, res, next) {
      fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
        res.locals.data = data
        next(err)
      })
    },
    function (req, res) {
      res.locals.data = res.locals.data.split(',')[1]
      res.send(res.locals.data)
    }
  ])


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);