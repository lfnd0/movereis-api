module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn("movies", "genre_id");
  },

  async down(queryInterface, Sequelize) {
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
};
