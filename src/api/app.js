require("../database");

const { errors } = require("celebrate");

const express = require("express");

const swaggerUI = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");

const userRoutes = require("./routes/user.routes");
const movieRoutes = require("./routes/movie.routes");
const genreRoutes = require("./routes/genre.routes");
const authenticationRoutes = require("./routes/authentication.routes");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/users", userRoutes);
app.use("/movies", movieRoutes);
app.use("/genres", genreRoutes);
app.use(authenticationRoutes);

app.use(errors());

module.exports = app;
