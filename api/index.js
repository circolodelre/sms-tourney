
var fs = require('fs');
var express = require('express');
var api = express();
var bodyParser = require('body-parser');
var config = require('./config');
var tourney = require('./tourney');
const port = process.env.PORT || 3000;

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(express.static('public'));

api.post('/api/sms/push', function (req, res) {
    var sms = req.body.Content;
    if (sms && sms.match(/^torneo /i)) {
        var data = tourney.create(sms);
        return res.send(data);
    }
    return res.send({ error: "sms not valid" });
});

module.exports = api.listen(port, function () {
    console.log('[SMS-Tourney] Server start on port', port);
});
