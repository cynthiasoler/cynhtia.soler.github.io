var Experience = require('../model/experienceModel.js');

exports.getAll = function(req, res) {
           return  Experience.find({}, function (err, experiences) {
                if(err) return err;
               res.status(200).json(experiences);
                });
            };