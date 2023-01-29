const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT;

connectDB();
const app = express();

//in order to get json type as a response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/users", require("./routes/userRoutes"));

//err handler use
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server working in ${PORT}`));
