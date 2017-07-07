process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require("../server");
var should = chai.should();

chai.use(chaiHttp);


describe('httptests', function() {
	it('should retrieve the homepage on \"/\" GET', function(done) {
		chai.request(server)
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			done();
		});
	});
});

