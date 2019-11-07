const express = require('express');

const BooksController = require('../controller/BooksController');

const router = express.Router();

router.get('/', BooksController.getAll);
router.get('/year', BooksController.getByYear);
router.get('/filter/:filter', BooksController.getByFilter);
router.get('/:id', BooksController.getById);



module.exports = router;