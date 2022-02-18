const { v4: uuidV4 } = require("uuid");
const { Model, DataTypes } = require("sequelize");
const bcryptjs = require("bcryptjs");

class User extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    }, {
      sequelize,
    });

    this.addHook("beforeSave", async (user) => {
      user.id = uuidV4();
      user.password = await bcryptjs.hash(user.password, bcryptjs.genSaltSync());
    });
  }

  static associate(models) {
    this.hasMany(models.Movie, {
      foreignKey: "user_id",
      as: "movies",
    });
  }
}

module.exports = User;
