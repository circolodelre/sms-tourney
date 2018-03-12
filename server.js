var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.post('/api/sms/push', function (req, res) {
    fs.writeFileSync('sms.json', req.body);
    res.send(req.body);
});

app.listen(port, function () {
    console.log('Example app listening on port', port);
});
