var express = require('express');
var app = express();
var fs = require("fs");

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(allowCrossDomain);
app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.npm_package_config_port));

app.get('/datetime', function (req, res) {
  res.end(new Date().toString());
})

var server = app.listen(app.get('port'), function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})
