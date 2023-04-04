var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  name: String,
  // email: String,
  // password: String,  no  need in google authentication
  googleId: String,
});

User = mongoose.model("User", userSchema);

module.exports = User;

