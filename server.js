const express = require('express');
const debug = require('debug')('tea-book:server');
const createError = require('http-errors');
const morgan = require('morgan');
const path = require('path');

// load .env in dev
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'build')));

// log our request in a fancy way
app.use(morgan('dev'));

app.get('/api/hey', (req, res) => {
  res.json({ greeting: 'Hello There' });
});

// catch 404 and forward to error handler
app.use('/api/*', (req, res, next) => {
  next(createError(404));
});

// handle react build
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// error handler
app.use((err, req, res, next) => {
  const message = err.message;
  const error = process.env.NODE_ENV === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message, error });
});

const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, () => debug(`Listening on port ${PORT}`));
