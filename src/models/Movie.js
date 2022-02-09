const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      year: DataTypes.INTEGER,
      director: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "registrator" });
    this.belongsTo(models.Genre, { foreignKey: "genre_id", as: "genre" });
  }
}

module.exports = Movie;
