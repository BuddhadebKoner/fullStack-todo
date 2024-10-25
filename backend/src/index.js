import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import { todoRoutes } from './routes/todo.Routes.js';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // For parsing application/json

// MySQL connection
const db = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

db.connect((err) => {
   if (err) {
      console.log('Error connecting to MySQL:', err);
   } else {
      console.log('MySQL Connected...');
   }
});

// Make the database connection accessible in controllers
app.set('db', db);

// Routes
app.use('/api/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
   res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
