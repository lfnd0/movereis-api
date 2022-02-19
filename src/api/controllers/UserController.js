const Movie = require("../models/Movie");
const User = require("../models/User");

module.exports = {
  async createUser(request, response) {
    const { username, email, password } = request.body;

    const usernameAlreadyExists = await User.findOne({ where: { username } });
    if (usernameAlreadyExists) {
      return response.status(400).json({ error: `Username ${username} already exists.` });
    }

    const emailAlreadyExists = await User.findOne({ where: { email } });
    if (emailAlreadyExists) {
      return response.status(400).json({ error: `E-mail ${username} already exists.` });
    }

    await User.create({
      username, email, password,
    });

    return response.status(201).json({ message: `User ${username} created successfully.` });
  },

  async listMovies(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id, {
      include: { model: Movie, association: "movies" },
    });

    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    return response.status(200).json(user.movies);
  },

  async changeEmail(request, response) {
    const { id } = request.headers;
    const { email } = request.body;

    const user = await User.findByPk(id);
    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    const verifyEmail = await User.findOne({ where: { email } });
    if (verifyEmail) {
      return response.status(400).json({ error: `E-mail ${email} already exists.` });
    }

    user.email = email;
    await user.save();

    return response.status(201).json(user);
  },
};
