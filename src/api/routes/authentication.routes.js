const express = require("express");

const routes = express.Router();
const AutheticationController = require("../controllers/AuthenticationController");

routes.post("/login", AutheticationController.login);

module.exports = routes;
