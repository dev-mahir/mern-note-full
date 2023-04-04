var mongoose = require("mongoose");
var encrypt = require("mongoose-encryption");


var userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(encrypt, {
  secret: process.env.ENC_Key,
  encryptedFields: ['password']
});

User = mongoose.model("User", userSchema);
 
module.exports = User;