
var api = require('../api'),
    sms = require('./sms'),
    chai = require('chai');

describe('Tourney create test', function () {

    it('Send SMS to create', function (done) {
        sms.send('torneo giocatore1  giocatore2 \n \t giocatore3 ' +
            ' giocatore4 giocatore5 giocatore6   ' +
            'giocatore7 giocatore8', function (res) {
            console.log(res);
            done();
        });
    });

    after(function () {
        api.close();
    });

});
