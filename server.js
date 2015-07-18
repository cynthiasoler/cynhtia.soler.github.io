var express = require('express');
var router = require('./server/router/mainRouter.js');
var mongoose = require('mongoose');
var Constants = require('../constants.json');

app = express();
mongoose.connect(Constants.mongoDB);

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname});
});
app.use('/api', router);

/*app.get('/experiences', function (req, res) {
    res.sendfile('index.html', {root: __dirname});
});*/

app.all('/*', function (req, res) {
    res.set('Content-Type', 'application/html')
        .sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 8090, console.log('Server listenning on port : 8090'));