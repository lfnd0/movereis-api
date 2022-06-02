const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const routes = express.Router();
const MovieController = require("../controllers/MovieController");
const Authentication = require("../middlewares/Authentication");

routes.post("/", Authentication, celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    year: Joi.number().required(),
    director: Joi.string().required(),
    genres_id: Joi.array().items(Joi.number()),
  }),
}), MovieController.createMovie);

routes.get("/list", MovieController.listMoviesWithGenres);

module.exports = routes;
