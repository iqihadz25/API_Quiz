const quizController = require('../controllers/provinsi');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:pulau', quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);

module.exports = router;