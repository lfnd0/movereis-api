module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("movies", "genre_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "genres",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface) {
    return queryInterface.removeColumn("movies", "genre");
  },
};
