var express = require('express');
var router = express.Router();
var experienceRouter = require('./experienceRouter.js');

router.use('/experiences', experienceRouter.getAll());
router.use('/experiences/add', experienceRouter.add());

module.exports = router;