const express = require("express");

const routes = express.Router();
const MovieController = require("../controllers/MovieController");

routes.post("/", MovieController.store);
routes.get("/list", MovieController.index);

module.exports = routes;
