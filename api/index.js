var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/sms/push', function (req, res) {
    fs.writeFileSync('sms.json', JSON.stringify(req.body));
    res.send(req.body);
});

app.listen(port, function () {
    console.log('Example app listening on port', port);
});
