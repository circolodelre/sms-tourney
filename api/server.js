/*!
 * COSHA Client
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const cosha = require('./cosha'),
      express = require('express'),
      app = express();

//
app.use(express.static(__dirname + "/../public"));

//
app.post('/i', function (req, res) {
    cosha.client.i(function (data) {
        res.send(data);
    });
});

//
app.post('/r', function (req, res) {
    cosha.client.r(function (data) {
        res.send(data);
    });
});

//
app.post('/w', function (req, res) {
    cosha.client.w(function (data) {
        res.send(data);
    });
});

//
app.listen(1983, function () {
    console.log('COSHA Client: listening...');
});
