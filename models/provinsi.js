module.exports = (sequelize, Sequelize) => {
  const Provinsi = sequelize.define("provinsi", {
    provinsi: {
      type: Sequelize.STRING,
    },
    pulau: {
      type: Sequelize.STRING,
    },
    gambar: {
      type: Sequelize.STRING,
    },
  });
  return Provinsi;
};
