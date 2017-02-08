var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');
var path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/public/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.ui_port));
app.set('view engine', 'pug');

app.use(function(req, res, next){
  res.locals = {environment: process.env.ui_environment};
  next();
});

app.get('/', function(request, response) {
  response.render('home', { title: 'Hey', message: 'Hello there' });
});


app.listen(app.get('port'), function() {
  //app.locals.environment = process.env.ENVIRONMENT || "dev";
  console.log("Node app is running at localhost:" + app.get('port'));
});
