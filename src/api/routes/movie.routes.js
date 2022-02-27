const express = require("express");

const routes = express.Router();
const MovieController = require("../controllers/MovieController");
const Authentication = require("../middlewares/Authentication");

routes.post("/", Authentication, MovieController.createMovie);
routes.get("/list", MovieController.listMoviesWithGenres);

module.exports = routes;
