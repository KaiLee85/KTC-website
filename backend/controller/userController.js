const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please include all fields");
  }
  res.send("register route");
};

const loginUser = async (req, res) => {
  res.send("login route");
};

module.exports = { registerUser, loginUser };
