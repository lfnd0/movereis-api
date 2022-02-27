const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/UserController");
const Authentication = require("../middlewares/Authentication");

routes.post("/", UserController.createUser);
routes.get("/list/movies", Authentication, UserController.listMovies);
routes.patch("/change/email", Authentication, UserController.changeEmail);

module.exports = routes;
