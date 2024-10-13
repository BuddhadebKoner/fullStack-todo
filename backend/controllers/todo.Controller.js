let todos = [];

// Get all todos
const getTodos = (req, res) => {
   res.json(todos);
};

// craete todo
const createTodo = (req, res) => {
   const { id, title } = req.body; 
   const existingTodo = todos.find(t => t.id === id);

   if (existingTodo) {
      return res.status(400).json({ message: 'Todo with this ID already exists' });
   }

   const newTodo = { id, title };
   todos.push(newTodo);
   res.status(201).json(newTodo);
};

// Update a todo by its unique ID
const updateTodo = (req, res) => {
   const { id } = req.params;
   const { title } = req.body;

   const todo = todos.find(t => t.id === id);
   if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
   }
   todo.title = title;
   res.json(todo);
};

// Delete a todo by its unique ID
const deleteTodo = (req, res) => {
   const { id } = req.params;
   todos = todos.filter(t => t.id !== id);
   res.status(204).send();
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
