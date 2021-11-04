const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router
    .route('/new')
    .post(TodoController.newTodo);

router
    .route('/edit')
    .post(TodoController.editTodo)

router
    .route('/delete')
    .delete(TodoController.deleteTodo)

router
    .route('/all')
    .get(TodoController.getAllTodos)

module.exports = router