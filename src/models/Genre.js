const { Model, DataTypes } = require("sequelize");

class Genre extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsToMany(models.Movie, {
      through: "movies_genres",
      foreignKey: "genre_id",
      as: "movies",
    });
  }
}

module.exports = Genre;
