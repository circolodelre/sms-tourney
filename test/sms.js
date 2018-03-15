
var request = require('request');


module.exports = {
    send: function (message, callback) {
        request.post(
            'http://localhost:3000/api/sms/push', {
                json: true,
                form: {
                    From:"393200466987",
                    To:"393453030303",
                    Content: message,
                    Time:"12/03/2018 05:20:09"
                }
            }, function (err, res, obj) {
                callback(obj);
            }
        );
    }
}
