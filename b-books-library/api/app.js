const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const BooksRoute = require('./routes/BooksRoute');

// start app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// set routes
app.use('/books', BooksRoute);

module.exports = app;
