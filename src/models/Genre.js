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
    this.hasMany(models.Movie, { foreignKey: "genre_id", as: "movies" });
  }
}

module.exports = Genre;
