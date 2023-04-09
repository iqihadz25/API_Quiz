const quizController = require('../controllers/quiz');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/:nomor', quizController.getByNomor);

module.exports = router;