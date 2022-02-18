const { findMovieByTitle, findUserById } = require("../middlewares");
const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

module.exports = {
  async store(request, response) {
    const { user_id } = request.headers;
    const {
      title, year, director, genres_id,
    } = request.body;

    const userAlreadyExists = await findUserById(user_id);
    if (!userAlreadyExists) {
      return response.status(404).json({ error: "User not found." });
    }

    const movieAlreadyExists = await findMovieByTitle(title);
    if (movieAlreadyExists) {
      return response.status(400).json({ error: "Movie already exists." });
    }

    const movie = await Movie.create({
      user_id,
      title,
      year,
      director,
    });

    await movie.addGenres(genres_id);

    return response.status(201).json(movie);
  },

  async index(request, response) {
    const movies = await Movie.findAll({ include: { model: Genre, attributes: ["name"], association: "genres" } });

    return response.status(200).json(movies);
  },
};
