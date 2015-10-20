var Experience = require('../model/experienceModel.js');

exports.getAll = function(req, res) {
    return  Experience.find({}, function (err, experiences) {
        if(err) return err;
        res.status(200).json(experiences);
    });
};

exports.getOne = function (req, res) {
    return Experience.findById(req.params.id, function (err, experience) {
        if(err) return err;
        res.status(200).json(experience);
    });
};

exports.addExperience = function(req, res) {
    var newUser = new Experience({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    });
    newUser.save(function(err, res) {
        if(err){return res.status(500).json(err)}
    });
    res.status(201).send('Created');
};

exports.updateExperience = function(req, res){
  Experience.findById(req.params.id, function(err, exp){
    if(err) return err;
    exp.title = req.body.title ? req.params.title : exp.title;
    exp.description = req.body.description ? req.body.description : exp.description;
    exp.save(function(err, res){
      if(err){return res.status(500).json(err)};
    });
    res.status(200).send('Updated');
  });
};

exports.deleteExperienceByID = function(req, res){
  Experience.findById(req.params.id, function(err, exp){
    if(err) return err;
    Experience.remove(function(err){
      if(err) return err;
    });
    res.status(204).send('Deleted');
  });
};
