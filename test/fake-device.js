/*!
 * COSHA Client
 * by Francesco Bianco <bianco@javanile.org>
 * Copyright(c) 2016-2017 Javanile.org
 * MIT Licensed
 */

const cosha = require('../src/cosha'),
      express = require('express'),
      app = express();

app.post('/i', function (req, res) {
    cosha.device.i(function (data) {
        res.send(data);
    });
});

app.post('/r', function (req, res) {
    cosha.device.r(function (data) {
        res.send(data);
    });
});

app.post('/w', function (req, res) {
    cosha.device.w(function (data) {
        res.send(data);
    });
});

app.listen(1981, function () {
    console.log('COSHA Fake Device: listening...');
});
