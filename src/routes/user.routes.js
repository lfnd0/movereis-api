const express = require("express");

const routes = express.Router();
const UserController = require("../controllers/UserController");

routes.post("/", UserController.store);
routes.patch("/change/email", UserController.changeEmail);
routes.get("/:id/list/movies", UserController.index);

module.exports = routes;
