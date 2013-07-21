#!usr /bin/env node

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var line = fs.readFileSync("index.html").toString();

app.get('/', function(request, response) {
 response.send(line);
});

app.use(express.static(__dirname + '/media'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
