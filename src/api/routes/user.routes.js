const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();
const UserController = require("../controllers/UserController");
const Authentication = require("../middlewares/Authentication");

routes.post("/", celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
  })
}), UserController.createUser);
routes.get("/list/movies", Authentication, UserController.listMovies);
routes.patch("/change/email", celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required()
  })
}), Authentication, UserController.changeEmail);

module.exports = routes;
