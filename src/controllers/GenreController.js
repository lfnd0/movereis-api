const Genre = require("../models/Genre");

module.exports = {
  async index(request, response) {
    const { id } = request.params;

    const genre = await Genre.findByPk(id, {
      include: { association: "movies" },
    });

    if (!genre) {
      return response.status(400).json({ error: "Genre not found." });
    }

    return response.status(200).json(genre.movies);
  },
};
