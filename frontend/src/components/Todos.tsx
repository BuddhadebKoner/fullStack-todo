import { useEffect, useState } from "react";
import { getTodos, deleteTodo, updateTodo } from "../api";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: number;
  created_at: string;
};

type TodosProps = {
  onEditTodo: (todo: Todo) => void;
  refreshTodo: boolean;
};

const Todos = ({ onEditTodo, refreshTodo }: TodosProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<number | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleMenuToggle = (id: number) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

  const fetchTodos = async () => {
    try {
      const todos = await getTodos();
      setTodos(todos);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleMarkAsDone = async (id: number, title: string, description: string) => {
    try {
      await updateTodo(id, title, description, 1);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: 1 } : todo
        )
      );
      setIsMenuOpen(null);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleMarkAsUndone = async (id: number, title: string, description: string) => {
    try {
      await updateTodo(id, title, description, 0);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: 0 } : todo
        )
      );
      setIsMenuOpen(null);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleEditTodo = (todo: Todo) => {
    onEditTodo(todo);
    setIsMenuOpen(null);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  useEffect(() => {
    if (refreshTodo) {
      fetchTodos();
    }
  }, [refreshTodo]);

  const pendingTodos = todos.filter((todo) => todo.completed === 0);
  const doneTodos = todos.filter((todo) => todo.completed === 1);

  return (
    <section className="w-full h-fit lg:px-[30vw] md:px-[10rem] px-[10px] py-[2rem] flex">
      <div className="w-full h-full bg-[#1C1C1C] pb-10 flex flex-col rounded-lg">

        <h2 className="text-white text-xl font-semibold px-5 pt-5">Pending Todos</h2>
        {pendingTodos.length > 0 ? (
          pendingTodos.map((todo) => (
            <div key={todo.id} className="w-full flex justify-between items-center border-b-2 border-[#3F3F3F] p-5 relative">
              <div className="flex flex-col">
                <h1 className="text-white text-lg lg:text-xl font-bold">{todo.title}</h1>
                <p className="text-[#ABABAB] text-lg">{todo.description}</p>
              </div>
              <button type="button" onClick={() => handleMenuToggle(todo.id)} className="relative">
                <img className="w-8 h-8" src="/assets/threedot.svg" alt="Options menu" />
              </button>

              {isMenuOpen === todo.id && (
                <div className="absolute right-5 top-[4rem] w-40 bg-[#2C2C2C] text-white shadow-lg rounded-md z-10">
                  <ul className="flex flex-col">
                    <li
                      onClick={() => handleEditTodo(todo)}
                      className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Edit</li>
                    <li
                      onClick={() => handleMarkAsDone(todo.id, todo.title, todo.description)}
                      className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Mark as Done</li>
                    <li className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Info</li>
                    <li
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="p-3 hover:bg-[#3A3A3A] text-red-600 cursor-pointer">Delete</li>
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-[#ABABAB] text-lg px-5">No pending todos</p>
        )}

        <h2 className="text-white text-xl font-semibold px-5 mt-10">Completed Todos</h2>
        {doneTodos.length > 0 ? (
          doneTodos.map((todo) => (
            <div key={todo.id} className="w-full flex justify-between items-center border-b-2 border-[#3F3F3F] p-5 relative">
              <div className="flex flex-col">
                <h1 className="line-through text-[#5E5E5E] text-lg lg:text-xl font-bold">{todo.title}</h1>
                <p className="line-through text-[#5E5E5E] text-lg">{todo.description}</p>
              </div>
              <button type="button" onClick={() => handleMenuToggle(todo.id)} className="relative">
                <img className="w-8 h-8" src="/assets/threedot.svg" alt="Options menu" />
              </button>

              {isMenuOpen === todo.id && (
                <div className="absolute right-5 top-[4rem] w-40 bg-[#2C2C2C] text-white shadow-lg rounded-md z-10">
                  <ul className="flex flex-col">
                    <li
                      onClick={() => handleMarkAsUndone(todo.id, todo.title, todo.description)}
                      className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Mark as Undone</li>
                    <li
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="p-3 hover:bg-[#3A3A3A] text-red-600 cursor-pointer">Delete</li>
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-[#ABABAB] text-lg px-5">No completed todos</p>
        )}
      </div>
    </section>
  );
};

export default Todos;
