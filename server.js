var express = require('express');
var router = require('./server/router/mainRouter.js');
var mongoose = require('mongoose');
var Constants = require('./server/constants.json');
var bodyParser = require('body-parser');
var path = require("path");

app = express();
mongoose.connect(Constants.mongoURI);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './public'));;
app.all('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, './public') });
});

app.use('/api', router);

app.listen(process.env.PORT || 8095, console.log('Server listening on port : 8095'));
