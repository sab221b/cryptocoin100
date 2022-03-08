var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./database/db');
require('./cron/crypto');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/apiRouter');

var app = express();
var cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
// app.use('/users', usersRouter);

module.exports = app;
