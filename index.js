const express = require('express');
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

app.use(function(req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'changeme',
    database: 'test',
  });
  res.locals.connect();
  next();
});
