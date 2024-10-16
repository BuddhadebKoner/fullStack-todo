// controllers/todo.Controller.js
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
