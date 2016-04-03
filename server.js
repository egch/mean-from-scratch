var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/mongodbdemo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
});


var PersonSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
},
	{collection: 'people' }
);

var Person = mongoose.model('',PersonSchema);

app.get('/', function(request, response){
	Person.find(function(error, data)
	{
		response.json(data);
	});
});

app.listen(3000, function(){
	console.log('...listening on port 3000');
});