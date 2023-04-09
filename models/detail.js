module.exports = (sequelize, Sequelize) => {
    const Detail = sequelize.define('detail', {
        judul: {
            type: Sequelize.STRING,
        },
        gambar: {
            type: Sequelize.STRING,
        },
        isi: {
            type: Sequelize.STRING,
        },
        provinsi: {
            type: Sequelize.STRING,
        },
    });
    return Detail;
}