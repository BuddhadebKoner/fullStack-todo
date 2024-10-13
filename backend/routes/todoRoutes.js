// routes/todoRoutes.js
const express = require('express');
const {
   getTodos,
   createTodo,
   updateTodo,
   deleteTodo
} = require('../controllers/todoController');

const router = express.Router();

// Routes with meaningful names
router.get('/', getTodos); // Get all todos
router.post('/create-new', createTodo); // Create a new todo
router.patch('/update/:id', updateTodo); // Update a todo by ID
router.delete('/delete/:id', deleteTodo); // Delete a todo by ID

module.exports = router;
