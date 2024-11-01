// all api requests are defined here
import axios from 'axios';
import { config } from '../config/config';

const apiUrl = config.baseURL;

// get all todos this route http://localhost:5000/api/todos/get-todos

export const getTodos = async () => {
   const response = await axios.get(`${apiUrl}/get-todos`);
   // console.log(response);
   return response.data;
};

// add a todo this route http://localhost:5000/api/todos/create-todo
export const addTodo = async (title: string, description: string) => { 
   const response = await axios.post(`${apiUrl}/create-todo`, { title, description });
   // console.log(response);
   return response.data;
};


// delete a todo this route http://localhost:5000/api/todos/delete-todo/:id
export const deleteTodo = async (id: number) => { 
   const response = await axios.delete(`${apiUrl}/delete-todo/${id}`);
   // console.log(response);
   return response.data;
};

// update a todo this route http://localhost:5000/api/todos/update-todo/:id

export const updateTodo = async (id: number, title: string, description: string, completed: number) => { 
   const response = await axios.put(`${apiUrl}/update-todo/${id}`, { title, description, completed });
   // console.log(response);
   return response.data;
};