const db = require("../models");
const Quiz = db.quizzes;

//CREATE: untuk menambahkan data 
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
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
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes successfully!",
            data: quizzes,
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully!",
            data: quiz,
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        //pk = primary key id
        quiz.destroy()

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
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true })
        res.json({
            message: `Quizzes retrieved successfully with id=${id}!`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
};

//FIND BY CATEGORY: Menampilkan data berdasarkan category 
exports.getByNomor = async (req, res) => {
    const nomor = req.params.nomor
    const quizzes = await Quiz.findOne({
        where : {
            nomor: nomor
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with nomor=${nomor}!`,
        data: quizzes,
    });
}