var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
let mongoose = require('mongoose')
let goods = require('./routes/goods')
const formidable = require('express-formidable')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

mongoose.connect('mongodb://127.0.0.1/ainichaoshi')
mongoose.connection.on("connected",()=>{
  console.log("MongoDB连接成功")
});
mongoose.connection.on("error",function () {
  console.log("MongoDB连接失败")
});
mongoose.connection.on("disconnected",function () {
  console.log("MongoDB断开")
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(formidable({
  encoding: 'utf-8',
  uploadDir : "public",
  multiples: true,
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods',goods)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
