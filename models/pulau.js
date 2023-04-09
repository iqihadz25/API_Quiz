  module.exports = (sequelize, Sequelize) => {
      const Pulau = sequelize.define("pulau", {
        pulau: {
          type: Sequelize.STRING,
        },
        gambar: {
          type: Sequelize.STRING,
        },
      });
      return Pulau;
    };
    