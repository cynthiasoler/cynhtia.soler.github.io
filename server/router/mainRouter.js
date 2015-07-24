var express = require('express');
var router = express.Router();
var experienceController = require('../controller/experienceController.js');

router.get('/experiences', experienceController.getAll);

module.exports = router;