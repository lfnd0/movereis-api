const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Genre = require("../models/Genre");

const Movie = require("../models/Movie");
const User = require("../models/User");

const connection = new Sequelize(dbConfig);

Movie.init(connection);
User.init(connection);
Genre.init(connection);

Movie.associate(connection.models);
User.associate(connection.models);
Genre.associate(connection.models);

module.exports = connection;
