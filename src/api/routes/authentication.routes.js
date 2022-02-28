const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();
const AutheticationController = require("../controllers/AuthenticationController");

routes.post("/login", celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
}), AutheticationController.login);

module.exports = routes;
