const db = require("../models");
const Quiz = db.quizzes;

exports.submitOne = async (req, res) => {

    // data yang didapatkan dari inputan oleh user
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        var quiz = await Quiz.findOne({
            where: {
                id: req.body.quizId
            }
        });

        if (req.body.answer == quiz.key) {
            res.status(200).json({
                "message": "YOI LUR"
            })
        } else {
            res.status(200).json({
                "message": `Ini benernya cuy ${quiz.key}`
            })
        }
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

exports.submitMany = async (req, res) => {
    //Async = Promise (Asyncron code)
    // Data yang didapatkan dari inputan user
    const jobsheet = {
        quizId: req.body.quizId,
        answer: req.body.answer,
    };

    try {
        let correct = 0
        let totalSoal = jobsheet.quizId.length
        for (let i = 0; i < totalSoal ; i++) {
            const quiz = await Quiz.findOne({
                //await = menyimpan data dari req body 
                limit: 1,
                where: {
                    id: jobsheet.quizId[i]
                },
                order: [ [ 'id', 'DESC' ]],
            });
            if(quiz.key == jobsheet.answer[i]){
                correct = correct + 1
            }
        }
        res.status(200).json({
            message: `${correct} benar dari ${totalSoal} quiz`
        })
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};