const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  email: {
    type: String,
    required: [true, "Please add a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

/*
//static singup method
userSchema.statics.signup = async function (username, email, password) {
  // use "this" instead of "User", buz when singup method execute, User model still don't have
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
  });
  if (user) {
    res
      .status(201)
      .json({ _id: user._id, username: user.name, email: user.email });
  }
  //return user and call function somewhere need it
  return user;
};
  */

module.exports = mongoose.model("User", userSchema);
