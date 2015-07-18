var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var experience = new Schema({
    title : {type:String, default: 'Titre'},
    description : {type: String},
    date: {type:Date}
});

var Experience = mongoose.model('Experience', experience);
module.exports = Experience;
