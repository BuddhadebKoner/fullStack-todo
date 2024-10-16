// routes/todo.Routes.js
import express from 'express';
import { createTodos, getTodos } from '../controllers/todo.Controller.js';

const router = express.Router();

// GET all todos
router.get('/get-todos', getTodos);
// craete a new todo
router.post('/create-todo',createTodos);
// update a todo
router.put('/update-todo',);
// delete a todo
router.delete('/delete-todo',);


export const todoRoutes = router;
