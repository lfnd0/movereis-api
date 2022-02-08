const express = require("express");
const dotenv = require("dotenv");

const movieRoutes = require("../routes/movie.routes");
const userRoutes = require("../routes/user.routes");

const app = express();

require("../database");

dotenv.config();

app.use(express.json());

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

module.exports = app;
