import { getAllTodos, createTodo, updateTodo, deleteTodo} from '../sql/todo.sql.js';

const getTodos = (req, res) => {
   const db = req.app.get('db');
   getAllTodos(db, (err, todos) => {
      if (err) {
         console.log(err);
         return res.status(500).json({ error: err.message });
      }
      // console.log(todos);
      res.json(todos);
   });
};

const createNewTodo = (req, res) => {
   const db = req.app.get('db');
   const newTodo = req.body;
   createTodo(db, newTodo, (err, todo) => {
      if (err) {
         return res.status(500).json({ error: err.message });
      }
      res.status(201).json(todo);
   });
};

const updateTodoById = (req, res) => {
   const db = req.app.get('db');
   const { id } = req.params;
   const updatedTodo = req.body;
   console.log("Updating todo:", updatedTodo,id);
   updateTodo(db, id, updatedTodo, (err, result) => {
      if (err) {
         return res.status(500).json({ error: err.message });
      }
      res.json({ message: result});
   });
};

const deleteTodoById = (req, res) => {
   const db = req.app.get('db');
   const { id } = req.params;
   deleteTodo(db, id, (err, result) => {
      if (err) {
         return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Todo deleted successfully' });
   });
};

export { getTodos, createNewTodo, updateTodoById, deleteTodoById };