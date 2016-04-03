var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Person = require('./models/Person');
var app = express();

mongoose.connect('mongodb://localhost/mongodbdemo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response){
	Person.find(function(error, data)
	{
		response.json(data);
	});
});

app.post('/', function(request, response){
	var np = new Person();
	np.firstName = request.body.firstName;
	np.lastName = request.body.lastName;
	np.save(function(error){
		response.json("A new person has been created");
	});
});

app.listen(3000, function(){
	console.log('...listening on port 3000');
});