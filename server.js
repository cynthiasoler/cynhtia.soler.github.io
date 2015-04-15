var express = require('express'),
app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname});
});

app.get('/experiences', function (req, res) {
    res.sendfile('index.html', {root: __dirname});
});

var server = app.listen(process.env.PORT || 8090, console.log('Server listenning on port : 8090'));