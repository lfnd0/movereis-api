const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports = {
  async createUser(request, response) {
    const { username, email, password } = request.body;

    const usernameAlreadyExists = await User.findOne({ where: { username } });
    if (usernameAlreadyExists) {
      return response.status(422).json({ error: "Username already exists." });
    }

    const emailAlreadyExists = await User.findOne({ where: { email } });
    if (emailAlreadyExists) {
      return response.status(422).json({ error: "E-mail already exists." });
    }

    const user = await User.create({
      username, email, password,
    });

    return response.status(201).json(user);
  },

  async listMovies(request, response) {
    const id = request.user;

    const user = await User.findByPk(id);
    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    const movies = await Movie.findAll({ include: { association: "genres" }, where: { user_id: user.id } });

    return response.status(200).json(movies);
  },

  async changeEmail(request, response) {
    const id = request.user;
    const { email } = request.body;

    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    const verifyEmail = await User.findOne({ where: { email } });
    if (verifyEmail) {
      return response.status(422).json({ error: "E-mail already exists." });
    }

    await User.update({ email }, { where: { id } });

    return response.status(204).send();
  },
};
