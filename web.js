var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
filename ="./index.html";

app.get('/', function(request, response) {
  val = fs.readFileSync(filename);
  var buf = new Buffer(val);
  response.send(buf.toString('utf-8'));
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
