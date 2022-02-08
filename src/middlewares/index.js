const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports = {
  async findUserById(id) {
    const user = await User.findByPk(id);
    return user;
  },

  async findUserByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
  },

  async findMovieByTitle(title) {
    const movie = await Movie.findOne({ where: { title } });
    return movie;
  },
};
