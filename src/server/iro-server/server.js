var http = require('http');
var port = process.env.port || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, '127.0.0.1');

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send({ color: '#ffffff' });
});

app.listen(port);
console.log('Listening on port 3000...');