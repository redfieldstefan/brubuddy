// import modules.
var mongoose = require('mongoose');

// define schema.
var equipmentSchema = new mongoose.Schema({
  name: String,
  description: String
});

// export model.
module.exports = mongoose.model('Equipment', equipmentSchema);
