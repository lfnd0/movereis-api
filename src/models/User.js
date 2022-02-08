const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.Movie, { foreignKey: "user_id", as: "movies" });
  }
}

module.exports = User;
