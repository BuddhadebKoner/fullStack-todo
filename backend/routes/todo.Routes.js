// routes/todo.Routes.js
import express from 'express';
import { getTodos } from '../controllers/todo.Controller.js';

const router = express.Router();

// GET all todos
router.get('/get-todos', getTodos);

export const todoRoutes = router;
