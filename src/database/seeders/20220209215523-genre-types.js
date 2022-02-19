module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("genres", [
      {
        name: "Ação",
        created_at: new Date(),
      },
      {
        name: "Aventura",
        created_at: new Date(),
      },
      {
        name: "Comédia",
        created_at: new Date(),
      },
      {
        name: "Documentário",
        created_at: new Date(),
      },
      {
        name: "Drama",
        created_at: new Date(),
      },
      {
        name: "Faroeste",
        created_at: new Date(),
      },
      {
        name: "Fantasia",
        created_at: new Date(),
      },
      {
        name: "Ficção científica",
        created_at: new Date(),
      },
      {
        name: "Musical",
        created_at: new Date(),
      },
      {
        name: "Policial",
        created_at: new Date(),
      },
      {
        name: "Romance",
        created_at: new Date(),
      },
      {
        name: "Terror",
        created_at: new Date(),
      },
      {
        name: "Thriller",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
