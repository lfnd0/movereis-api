const { v4: uuidV4 } = require("uuid");
const { Model, DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize,
    });

    this.addHook("beforeSave", async (user) => {
      user.id = uuidV4();
      user.password = await bcryptjs.hash(user.password, bcryptjs.genSaltSync());
    });
  }

  static associate(models) {
    this.hasMany(models.Movie, { foreignKey: "user_id", as: "movies" });
  }
}

module.exports = User;
