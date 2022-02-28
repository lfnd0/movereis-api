const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();
const genreController = require("../controllers/GenreController");

routes.get("/:id/list/movies", celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), genreController.listGenresWithMovies);

module.exports = routes;
