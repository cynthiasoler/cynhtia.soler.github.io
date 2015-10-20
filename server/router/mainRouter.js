var express = require('express');
var router = express.Router();
var experienceController = require('../controller/experienceController.js');

router.get('/experiences', experienceController.getAll);
router.get('/experiences/:id', experienceController.getOne);
router.post('/experiences/add', experienceController.addExperience);
router.post('/experiences/delete', experienceController.deleteExperienceByID);

module.exports = router;
