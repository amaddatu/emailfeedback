var mongoose = require('mongoose');
mongoose.Promise = Promise;
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
	title : String,
	body : String
});


var BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;