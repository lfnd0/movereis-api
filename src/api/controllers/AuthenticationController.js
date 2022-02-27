require("dotenv").config();

const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  async login(request, response) {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(400).json({ error: "E-mail or password incorrect." });
    }

    const passwordCheck = await compare(password, user.password);

    if (!passwordCheck) {
      return response.status(400).json({ error: "E-mail or password incorrect." });
    }

    const token = sign(
      {},
      process.env.TOKEN_SECRET,
      {
        subject: user.id,
        expiresIn: process.env.TOKEN_EXPIRE_IN,
      },
    );

    return response.status(201).json({ token });
  },
};
