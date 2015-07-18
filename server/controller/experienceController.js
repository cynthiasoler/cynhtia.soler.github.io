var Experience = require('../model/experienceModel.js');

exports.getAll = function(req, res) {
   return  Experience.find({}, function (err, experiences) {
        if(err) return err;
        return experiences;
    });
};

exports.add = function(req, res) {
    //Experience.save()
};