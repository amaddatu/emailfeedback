const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var PORT = process.env.PORT || 3000;
app.use(express.static('build'));
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/my_database';
mongoose.connect(MONGODB_URI, {
	//useMongoClient: true
});
var BlogPost = require('./models/blogpost');


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
