const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static singup method
userSchema.statics.signup = async (email, password) => {
  // use "this" instead of "User", buz when singup method execute, User model still don't have
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }
};

module.exports = mongoose.model("User", userSchema);
