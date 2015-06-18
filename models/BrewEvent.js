// import modules.
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

// define schema.
var brewEventSchema = new mongoose.Schema({
  userId: ObjectId,
  recipe: ObjectId,
  title: String,
  description: String,
  ingredients: [
    {
      item: String,
      amount: String,
      unit: String
    }
  ],
  steps: [
    {
      directions: String,
      offset: Number, //length of the brew event
      status: false
      // steps move automatically to the next
    }
  ],
  complete: Boolean
});

// export model.
module.exports = mongoose.model('BrewEvent', brewEventSchema);
