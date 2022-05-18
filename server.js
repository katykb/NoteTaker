const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.use(require ('./Routes'));



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);