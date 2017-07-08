const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var mongoose = require('mongoose');
mongoose.Promise = Promise;
var PORT = process.env.PORT || 3000;
app.use(express.static('build'));
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/my_database';
mongoose.connect(MONGODB_URI, {
	//useMongoClient: true
});
var BlogPost = require('./models/blogpost');
var Groups = require('./models/groups');
var GroupsFeedback = require('./models/groupsfeedback');


// // Example Routes for API etc. you can use the functions below for other routes,
// // make sure to set it up with the correct order, order determines the priority of what gets served up!

// // homepage route
// app.get('/', function (req, res) {
//   res.sendFile('./build/index.html');
// });

// // using a wildcard
// // this matches anything that begins with "otherroutes"
// app.get('/otherroutes*', function (req, res) {
//   res.sendFile('./build/index.html');
// });

// // a specific route
// // this matches only "otherroutes"
// app.get('/otherroutes', function (req, res) {
//   res.sendFile('./build/index.html');
// });

// api route
app.get("/api/hello", function (req, res){
	res.json({"hello": "world"});
	return;
});

app.get("/api/groups/:f_key", function (req, res){
	// create a comment 
	console.log(req.params.f_key);
	var q = Groups.findOne({ f_key: req.params.f_key});
	q.exec(function(err, group){
		console.log("done");
		res.json(group);
	});
	
	return;
});

app.post("/api/groupsfeedback", function (req, res){
	// create a comment 
	var feedback = req.body;
	console.log(feedback);
	var q = Groups.findOne({ f_key: feedback.f_key});
	q.exec(function(err, group){
		//console.log("done");
		//res.json(group);
		if(group != null){
			console.log("found group");
			var q2 = GroupsFeedback.findOne({ 
				f_key: feedback.f_key
				, user: feedback.user
			});
			q2.exec(function(err, fbTest){
				if(fbTest === null){
					var fb = new GroupsFeedback({
						f_key: feedback.f_key
						, name: feedback.name
						, email: feedback.email
						, effective_team: feedback.effective_team
						, commentary: feedback.commentary
						, user: feedback.user
					});
					fb.save(function(error, fb){
						console.log("saved feedback");
						res.json(fb);
					});
				}
				else{
					console.log("found feedback");
					res.json(fbTest);
				}
			});
			
		}
		else{
			console.log("did not find group");
			res.json({error: "error: did not find group"});
		}
		
	});
	
	return;
});

app.get("/api/groupsfeedback/:f_key/:user", function (req, res){
	// create a comment 
	var user = req.params.user;
	var f_key = req.params.f_key;
	console.log(user);
	var q = Groups.findOne({ f_key: f_key});
	q.exec(function(err, group){
		//console.log("done");
		//res.json(group);
		if(group != null){
			console.log("found group");
			var q2 = GroupsFeedback.findOne({ 
				f_key: f_key
				, user: user
			});
			q2.exec(function(err, fbTest){
				if(fbTest === null){
					console.log("did not find feedback")
					res.json({error: "error: did not find feedback"});
				}
				else{
					console.log("found feedback");
					res.json(fbTest);
				}
			});
			
		}
		else{
			console.log("did not find group");
			res.json({error: "error: did not find group"});
		}
		
	});
	
	return;
});

// mongoose route
app.get("/api/blogposttest", function (req, res){
	// create a comment 
	var blogpost = new BlogPost({ title: 'My Comment', body: "body"});
	//res.json({test: "test"});
	blogpost.save(function(error, blogpost){
		if(error){
			res.json({error: "could not create blogpost"})
		}
		else{
			res.json(blogpost);
		}
	});
	// BlogPost.create({ title: 'My comment' },
	// 	function(error, blogpost) {
	// 		console.log("did i get here???")
	// 		if (error) {
	// 			res.json({error: "unknown error"});
	// 		} else {
	// 			res.json(blogpost);
	// 		}
	// 	}
	// );
	return;
});


// Since this is the last non-error-handling
// middleware use()d, we assume we are supposed to forward to react, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

app.get('/*', function(req, res){

  // we don't know what they requested and it isn't listed above. we default to the React index.html file.
	res.sendFile( path.join(__dirname,"build", "index.html"));
	return;
});

//start the server to listen on port specified
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('MongoDB Connected!');
	app.listen(PORT, function () {
		console.log('Example app listening on port ' + PORT + '!')
	});
});

module.exports = app;
