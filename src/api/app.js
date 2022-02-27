require("../database");

const express = require("express");

const userRoutes = require("./routes/user.routes");
const movieRoutes = require("./routes/movie.routes");
const genreRoutes = require("./routes/genre.routes");
const authenticationRoutes = require("./routes/authentication.routes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use(authenticationRoutes);

module.exports = app;
