// get todos 
export const getTodos = (req, res) => {
   const db = req.app.get('db');
   const query = 'SELECT * FROM mytodos';

   db.query(query, (err, result) => {
      if (err) {
         console.log(err);
         return res.status(500).send('Internal Server Error');
      }
      res.status(200).json(result);
      console.log(result);
   });
};

// INSERT INTO `mytodos` (`todo`, `isDone`) VALUES ('hello', '0');
export const createTodos = (req, res) => {
   const db = req.app.get('db');
   const { todo, isDone } = req.body;
   const query = 'INSERT INTO mytodos (todo, isDone) VALUES (?, ?)';

   db.query(query, [todo, isDone], (err, result) => {
      if (err) {
         console.log(err);
         return res.status(500).send('Internal Server Error');
      }
      res.status(201).send('Todo added');
      console.log(result);
   });
}

// update a todo