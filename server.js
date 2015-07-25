var express = require('express');
var router = require('./server/router/mainRouter.js');
var mongoose = require('mongoose');
var Constants = require('./server/constants.json');
var bodyParser = require('body-parser');

app = express();
mongoose.connect(Constants.mongoURI);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/api', router);

var server = app.listen(process.env.PORT || 8090, console.log('Server listening on port : 8090'));