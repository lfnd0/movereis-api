const express = require("express");

const routes = express.Router();
const MovieController = require("../controllers/MovieController");

routes.post("/", MovieController.createMovie);
routes.get("/list", MovieController.listMoviesWithGenres);

module.exports = routes;
