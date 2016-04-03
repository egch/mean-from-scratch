// Create the PersonSchema.

var mongoose = require('mongoose');
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

module.exports = mongoose.model('',PersonSchema);
