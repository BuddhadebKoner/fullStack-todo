import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: number;
  created_at: string;
};

const Todos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<number | null>(null);

  const handleMenuToggle = (id: number) => {
    setIsMenuOpen(isMenuOpen === id ? null : id);
  };

  // Example data 
  const todos: Todo[] = [
    {
      "id": 1,
      "title": "hello guys",
      "description": "this is all about fullstack todo",
      "completed": 1,
      "created_at": "2024-10-24T00:53:40.000Z"
    },
    {
      "id": 2,
      "title": "2nd todo changes",
      "description": "changes todo",
      "completed": 0,
      "created_at": "2024-10-24T01:06:16.000Z"
    },
    {
      "id": 3,
      "title": "See you not for mind",
      "description": "this is a log story",
      "completed": 1,
      "created_at": "2024-10-26T11:26:30.000Z"
    },
    {
      "id": 4,
      "title": "See you not for mind",
      "description": "this is a log story",
      "completed": 0,
      "created_at": "2024-10-26T23:34:10.000Z"
    },
    {
      "id": 6,
      "title": "6th todo",
      "description": "whats upp bro",
      "completed": 0,
      "created_at": "2024-10-26T23:43:59.000Z"
    },
    {
      "id": 7,
      "title": "7th todo",
      "description": "whats upp bro",
      "completed": 0,
      "created_at": "2024-10-26T23:46:53.000Z"
    },
    {
      "id": 8,
      "title": "9th todo",
      "description": "whats upp bro",
      "completed": 0,
      "created_at": "2024-10-27T21:39:25.000Z"
    }
  ]

  // Separate pending and completed todos
  const pendingTodos = todos.filter(todo => todo.completed === 0);
  const doneTodos = todos.filter(todo => todo.completed === 1);

  return (
    <section className="w-full h-fit lg:px-[30vw] md:px-[10rem] px-[10px] py-[2rem] flex">
      <div className="w-full h-full bg-[#1C1C1C] pb-10 flex flex-col rounded-lg">

        {/* Pending Todos */}
        {pendingTodos.map((todo) => (
          <div
            key={todo.id}
            className="w-full h-fit flex justify-between items-center border-b-2 border-[#3F3F3F] p-5 relative"
          >
            <div className="w-fit h-fit flex flex-col">
              <h1 className="text-white text-lg lg:text-xl font-bold">{todo.title}</h1>
              <h2 className="text-[#ABABAB] text-lg">{todo.description}</h2>
            </div>
            <button type="button" onClick={() => handleMenuToggle(todo.id)} className="relative">
              <img className="w-8 h-8" src="/assets/threedot.svg" alt="todo-menu" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen === todo.id && (
              <div className="absolute right-5 top-[4rem] w-40 bg-[#2C2C2C] text-white shadow-lg rounded-md z-10">
                <ul className="flex flex-col">
                  <li className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Edit</li>
                  <li className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Mark as Done</li>
                  <li className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Info</li>
                  <li className="p-3 hover:bg-[#3A3A3A] text-red-600 cursor-pointer">Delete</li>
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Completed Todos */}
        <h2 className="text-white text-xl font-semibold px-5 mt-10">Completed Todos</h2>
        {doneTodos.map((todo) => (
          <div
            key={todo.id}
            className="w-full h-fit flex justify-between items-center border-b-2 border-[#3F3F3F] p-5 relative"
          >
            <div className="w-fit h-fit flex flex-col">
              <h1 className="line-through text-[#5E5E5E] text-lg lg:text-xl font-bold">{todo.title}</h1>
              <h2 className="line-through text-[#5E5E5E] text-lg">{todo.description}</h2>
            </div>
            <button type="button" onClick={() => handleMenuToggle(todo.id)} className="relative">
              <img className="w-8 h-8" src="/assets/threedot.svg" alt="todo-menu" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen === todo.id && (
              <div className="absolute right-5 top-[4rem] w-40 bg-[#2C2C2C] text-white shadow-lg rounded-md z-10">
                <ul className="flex flex-col">
                  <li className="p-3 hover:bg-[#3A3A3A] cursor-pointer">Mark as Undone</li>
                  <li className="p-3 hover:bg-[#3A3A3A] text-red-600 cursor-pointer">Delete</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todos;
