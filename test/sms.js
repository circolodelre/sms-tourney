
var request = require('request');


module.exports = {
    send: function (message, time, from, callback) {
        request.post(
            'http://localhost:3000/api/sms/push', {
                json: true,
                form: {
                    From:"393200466987",
                    To:from,
                    Content: message,
                    Time: time
                }
            }, function (err, res, obj) {
                callback(obj);
            }
        );
    }
}
