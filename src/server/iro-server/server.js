var http = require('http');
var port = process.env.port || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, '127.0.0.1');

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    var c = '#ffffff';
    var letters = '0123456789ABCDEF'.split('');
    var c = '#';
    for (var i = 0; i < 6; i++) {
        c += letters[Math.floor(Math.random() * 16)];
    }
    var utc = Date.now();
    res.send({ color: c, at: utc });
});

app.listen(port);
console.log('Listening on port 3000...');