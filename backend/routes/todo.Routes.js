// routes/todoRoutes.js
const express = require('express');
const {
   getTodos,
   createTodo,
   updateTodo,
   deleteTodo
} = require('../controllers/todo.Controller');

const router = express.Router();

// Routes with meaningful names
router.get('/', getTodos);
router.post('/create-new', createTodo);
router.patch('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;