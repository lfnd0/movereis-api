const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Movie = require("../models/Movie");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

Movie.init(connection);
User.init(connection);

Movie.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
