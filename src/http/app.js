const express = require("express");

const userRoutes = require("../routes/user.routes");
const movieRoutes = require("../routes/movie.routes");
const genreRoutes = require("../routes/genre.routes");

const app = express();

require("../database");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);

module.exports = app;
