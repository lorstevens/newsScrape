// var mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// var Schema = mongoose.Schema;

// // Using the Schema constructor, create a new NoteSchema object
// // This is similar to a Sequelize model
// var SavedSchema = new Schema({
//   // `title` is of type String
//   title: String,
//   // `body` is of type String
//   body: String,

//   savedArt: String, 


// });

// // This creates our model from the above schema, using mongoose's model method
// var Saved = mongoose.model("Saved", SavedSchema);

// // Export the Note model
// module.exports = Saved;


var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SavedSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,

  },
  // `link` is required and of type String
  link: {
    type: String,

  }
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note

});

// This creates our model from the above schema, using mongoose's model method
var Saved = mongoose.model("Saved", Schema);

// Export the Article model
module.exports = Saved


