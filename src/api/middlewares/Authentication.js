require("dotenv").config();

const { verify } = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (request, response, next) => {
  const auth = request.headers.authorization;

  if (!auth) {
    return response.status(404).json({ error: "Token missing." });
  }

  const [, token] = auth.split(" ");

  try {
    const user_id = verify(token, process.env.TOKEN_SECRET);
    const user = await User.findByPk(user_id.sub);

    // console.log(user_id);

    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    request.user = user_id.sub;

    return next();
  } catch {
    return response.status(401).json({ error: "Invalid token." });
  }
};
