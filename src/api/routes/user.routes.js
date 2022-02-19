const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/UserController");

routes.post("/", UserController.createUser);
routes.get("/:id/list/movies", UserController.listMovies);
routes.patch("/change/email", UserController.changeEmail);

module.exports = routes;
