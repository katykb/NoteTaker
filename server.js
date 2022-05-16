const express = require('Express');
const fs = require('fs')
const path = require('path')

const app = express();
const port = process.env || 3001




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);