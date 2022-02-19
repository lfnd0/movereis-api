const express = require("express");

const routes = express.Router();
const genreController = require("../controllers/GenreController");

routes.get("/:id/list/movies", genreController.listGenresWithMovies);

module.exports = routes;
