#!usr /bin/env node

var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var line = fs.readFileSync("index.html").toString('utf-8', 0, 27);
var app.get('/', function(request, response){
 response.send(line);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
