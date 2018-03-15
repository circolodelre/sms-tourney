
var fs = require('fs');
var express = require('express');
var mkdirp = require('mkdirp');
var api = express();
var bodyParser = require('body-parser');
var config = require('./config');
const port = process.env.PORT || 3000;

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(express.static('public'));

api.post('/api/sms/push', function (req, res) {
    var sms = req.body.Content;
    if (sms && sms.match(/^torneo /i)) {
        config.load();
        var players = sms.trim().substr(6).trim().replace(/[\s\t\n]+/g, ' ').split(' ');
        var tourneyId = 1;
        var tourney = {
            rounds: 6,
            players: players
        };
        mkdirp.sync('./store/data/tourney/'+tourneyId);
        return res.send(tourney);
    }
    return res.send({ error: "sms not valid" });
});

module.exports = api.listen(port, function () {
    console.log('[SMS-Tourney] Server start on port', port);
});
