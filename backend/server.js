const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  res.status(201).json({ messagek: "json message" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server working in ${PORT}`));
