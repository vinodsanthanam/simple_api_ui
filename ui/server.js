var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
