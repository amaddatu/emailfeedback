var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var GroupsFeedbackSchema = new Schema({
	f_key : String,
	user : String,
	name : String,
	email : String,
	effective_team: Boolean,
	commentary: String
});


var GroupsFeedback = mongoose.model('GroupsFeedback', GroupsFeedbackSchema);

module.exports = GroupsFeedback;