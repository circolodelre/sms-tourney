var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/api/sms/push', function (req, res) {
    fs.writeFileSync('sms.json', JSON.stringify(req.body));
    res.send(req.body);
});

app.listen(port, function () {
    console.log('[SMS-Tourney] Server start on port', port);
});
