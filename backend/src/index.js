import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import { todoRoutes } from './routes/todo.Routes.js';

dotenv.config();

const app = express();
app.use(express.json()); // For parsing application/json

// MySQL connection pool
const db = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0,
});

// Keep-Alive Ping to avoid MySQL disconnection
setInterval(() => {
   db.query('SELECT 1', (err) => {
      if (err) {
         console.error('Keep-alive query failed:', err);
      }
   });
}, 5 * 60 * 1000); // Ping every 5 minutes

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
