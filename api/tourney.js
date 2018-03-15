
var config = require('./config');
var yaml = require("js-yaml");
var fs = require("fs");
var mkdirp = require('mkdirp');
var swiss = require('swiss-pairing')({
    maxPerRound: 1
})

module.exports = {

    create: function (sms) {
        config.load();
        var playersList = sms.trim().substr(6).trim().replace(/[\s\t\n]+/g, ' ').split(' ');
        var players = [];
        for (var i in playersList) {
            players.push({
                id: playersList[i],
                seed: 1440
            });
        }

        var tourneyId = config.data.tourneyId;
        var tourneyFlag = config.data.tourneyFlag;
        var tourneyCode = 1;
        var tourney = {
            id: tourneyId,
            flag: tourneyFlag,
            code: tourneyCode,
            rounds: 6,
            players: players
        };

        this.save(tourneyId, tourney);

        config.data.tourneyId++;
        config.data.tourneyFlag++;
        if (config.data.tourneyFlag >= 20) {
            config.data.tourneyFlag = 0;
        }

        config.save();

        var matchups = swiss.getMatchups(1, players, []);

        this.saveRound(tourneyId, 1, matchups);

        return tourney;
    },

    save: function (tourneyId, tourney) {
        var tourneyDir = './store/data/tourney/' + tourneyId;
        var tourneyFile = tourneyDir + '/tourney.yml';
        if (!fs.existsSync(tourneyDir)) {
            mkdirp.sync(tourneyDir);
        }
        var data = yaml.safeDump(tourney);
        fs.writeFileSync(tourneyFile, data);
    },

    saveRound: function (tourneyId, round, matchups) {
        var tourneyDir = './store/data/tourney/' + tourneyId;
        var roundFile = tourneyDir + '/round'+round+'.yml';
        if (!fs.existsSync(tourneyDir)) {
            mkdirp.sync(tourneyDir);
        }
        var data = yaml.safeDump(matchups);
        fs.writeFileSync(roundFile, data);
    }

};