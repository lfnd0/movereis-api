const { findUserByEmail, findUserById } = require("../middlewares");
const User = require("../models/User");

module.exports = {
  async store(request, response) {
    const { username, email } = request.body;

    const userAlreadyExists = await findUserByEmail(email);

    if (userAlreadyExists) {
      return response.status(400).json({ error: "E-mail already exists." });
    }

    const user = await User.create({
      username, email,
    });

    return response.status(201).json(user);
  },

  async index(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id, {
      include: { association: "movies" },
    });

    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    return response.status(200).json(user.movies);
  },

  async change(request, response) {
    const { id } = request.headers;
    const { email } = request.body;

    const user = await findUserById(id);
    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    const verifyEmail = await findUserByEmail(email);
    if (verifyEmail) {
      return response.status(400).json({ error: "E-mail already exists." });
    }

    // const user = await User.update({ email }, { where: { id } });

    user.email = email;
    await user.save();

    return response.status(201).json(user);
  },
};
