var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/contact', function (req, res) {
    res.send('aaa');
});

app.get('/profile/:id', function (req, res) {
    res.send("The number is: " + req.params.id);
});

app.listen(8000);
