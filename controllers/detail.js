const db = require("../models");
const Provinsi = db.provinsi;
const Detail = db.detail;

//CREATE: untuk menambahkan data 
exports.create = async (req, res) => {

    try {
        const data = await Detail.create(req.body)
        res.json({
            message: "Berhasil lur",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message ,
            data: null,
        });
    }
}

//READ: menampilkan semua data quiz
exports.getAll = async(req, res) => {
    try {
        const detail = await Detail.findAll()
        res.json({
            message: "Provinsi successfully!",
            data: detail,
        });
    } catch (error) {           
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

//UPDATE: Mengubah data sesuai ID 
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const detail = await Detail.findByPk(id, { rejectOnEmpty: true })
        detail.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Provinsi updated successfully!",
            data: detail,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}

//DELETE: Menghapus data sesuai ID 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const detail = await Detail.findByPk(id, { rejectOnEmpty: true })
        //pk = primary key id
        detail.destroy()

        res.json({
            message: "Berhasil dihapus bro!"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Aduh error",
            data: null,
        });
    }
}

//FIND BY ID: Mengambil data sesuai ID 
exports.findOne = async (req, res) => {
    const name = req.params.provinsi
    try {
        const provinsi = await Detail.findAll({
            where : {
                provinsi: name
            }
        })
        res.json({
            message: `Detail retrieved successfully with provinsi=${name}!`,
            data: provinsi,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
};