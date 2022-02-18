const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: DataTypes.STRING,
        unique: true,
      },
      year: {
        type: DataTypes.INTEGER,
        validate: {
          not: ["[a-z]", "i"],
        },
      },
      director: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "registrator",
    });

    this.belongsToMany(models.Genre, {
      through: "movies_genres",
      foreignKey: "movie_id",
      as: "genres",
    });
  }
}

module.exports = Movie;
