var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var GroupsSchema = new Schema({
	name : [String],
	website : String,
	f_key : String
});


var Groups = mongoose.model('Groups', GroupsSchema);

module.exports = Groups;