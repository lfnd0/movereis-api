module.exports = {
  async up(queryInterface) {
    return queryInterface.removeColumn("movies", "genre");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("movies", "genre", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
