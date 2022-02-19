const Genre = require("../models/Genre");
const Movie = require("../models/Movie");

module.exports = {
  async listGenresWithMovies(request, response) {
    const { id } = request.params;

    const genre = await Genre.findByPk(id, {
      include: { model: Movie, association: "movies" },
    });

    if (!genre) {
      return response.status(400).json({ error: "Genre not found." });
    }

    return response.status(200).json(genre.movies);
  },
};
