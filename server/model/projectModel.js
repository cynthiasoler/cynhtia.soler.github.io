var mongoose = require('mongoose');
var mongooseFile = require('mongoose-file');
var file = mongooseFile.file;
var Schema = mongoose.Schema;

var project = new Schema({
    title : {type:String, default: 'Titre'},
    description : {type: String},
    date: {type:Date}
});

var Project = mongoose.model('Project', project);
module.exports = Project;
