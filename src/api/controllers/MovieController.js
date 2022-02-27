const Genre = require("../models/Genre");
const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports = {
  async createMovie(request, response) {
    const user_id = request.user;
    const {
      title, year, director, genres_id,
    } = request.body;

    const userAlreadyExists = await User.findByPk(user_id);
    if (!userAlreadyExists) {
      return response.status(404).json({ error: "User not found." });
    }

    const movieAlreadyExists = await Movie.findOne({ where: { title } });
    if (movieAlreadyExists) {
      return response.status(422).json({ error: "Movie already exists." });
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

  async listMoviesWithGenres(request, response) {
    const movies = await Movie.findAll({ include: { model: Genre, association: "genres" } });

    return response.status(200).json(movies);
  },
};
