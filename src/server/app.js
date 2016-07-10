var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

var server = app.listen(process.env.PORT || 3000);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/color', function (req, res, next) {
    res.send({ color: universalColor, at: lastSetAt });
    res.status(200);
});

var universalColor = '#88385c';
var lastSetAt = Date.now();

function generateColor()
{
    var c = '#';
    var letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 6; i++) {
        c += letters[Math.floor(Math.random() * 16)];
    }

    universalColor = c;
    lastSetAt = Date.now();
}

app.use(express.static('www'));

module.exports = app;

setInterval(generateColor, 15000);