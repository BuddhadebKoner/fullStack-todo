export const getAllTodos = (db, callback) => {
   const query = 'SELECT * FROM todos';
   db.query(query, (err, results) => {
      if (err) {
         return callback(err, null);
      }
      callback(null, results);
   });
};

export const createTodo = (db, todo, callback) => {
   const { title, description } = todo;
   const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
   db.query(query, [title, description], (err, result) => {
      if (err) {
         return callback(err, null);
      }
      callback(null, { id: result.insertId, ...todo });
   });
};

export const updateTodo = (db, id, todo, callback) => {
   const { title, description, completed } = todo;
   const query = 'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?';
   db.query(query, [title, description, completed, id], (err, result) => {
      if (err) {
         return callback(err, null);
      }
      callback(null, result);
   });
};

export const deleteTodo = (db, id, callback) => {
   const query = 'DELETE FROM todos WHERE id = ?';
   db.query(query, [id], (err, result) => {
      if (err) {
         return callback(err, null);
      }
      callback(null, result);
   });
};
