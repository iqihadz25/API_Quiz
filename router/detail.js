const quizController = require('../controllers/detail');
const router = require('express').Router();

router.post('/', quizController.create);
router.get('/', quizController.getAll);
router.get('/:provinsi', quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);

module.exports = router;