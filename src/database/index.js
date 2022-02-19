const Sequelize = require("sequelize");

const config = require("../config/database");

const Genre = require("../api/models/Genre");
const Movie = require("../api/models/Movie");
const User = require("../api/models/User");

const connection = new Sequelize(config);

Movie.init(connection);
User.init(connection);
Genre.init(connection);

Movie.associate(connection.models);
User.associate(connection.models);
Genre.associate(connection.models);

module.exports = connection;
