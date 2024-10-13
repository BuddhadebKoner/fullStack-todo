// app.js
const express = require('express');
const todoRoutes = require('./routes/todo.Routes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
