import express from 'express';
import { getTodos, createNewTodo, updateTodoById, deleteTodoById } from '../controllers/todo.Controller.js';

const router = express.Router();
// test route
router.get('/', (req, res) => {
   res.send('Todo route is working');
});
// GET all todos
router.get('/get-todos', getTodos);
// craete a new todo
router.post('/create-todo', createNewTodo);
// update a todo
router.put('/update-todo',updateTodoById);
// delete a todo
router.delete('/delete-todo',deleteTodoById);


export const todoRoutes = router;
