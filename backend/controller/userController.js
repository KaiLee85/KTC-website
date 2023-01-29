const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please include all fields" });
  }
  res.send("register route");
};
const loginUser = (req, res) => {
  res.send("login route");
};

module.exports = { registerUser, loginUser };
