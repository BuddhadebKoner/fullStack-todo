import { useState, useEffect } from "react";
import { addTodo, updateTodo } from "../api";

interface TodoFormProps {
  action: "Add" | "Update";
  todo?: { id: number; title: string; description: string; completed: number };
  onComplete: () => void; // Callback for parent to handle state update
}

const TodoForm = ({ action, todo, onComplete }: TodoFormProps) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const maxTitleLength = 20;
  const maxDescLength = 100;

  // Only set initial values for update action
  useEffect(() => {
    if (action === "Update" && todo) {
      setTitle(todo.title);
      setDesc(todo.description);
    }
  }, [action, todo]);

  async function handleTodoAction(e: React.FormEvent) {
    e.preventDefault();

    // Check for empty fields
    if (!title.trim() || !desc.trim()) {
      console.log("Please provide both title and description.");
      return;
    }

    try {
      if (action === "Update" && todo) {
        await updateTodo(todo.id, title, desc, todo.completed);
        console.log("Todo updated successfully");
      } else {
        await addTodo(title, desc);
        console.log("Todo added successfully");
      }

      // Clear the input fields and notify parent on successful submission
      setTitle("");
      setDesc("");
      onComplete(); // Trigger callback to refresh data in parent component
    } catch (error) {
      console.error("Error handling todo:", error);
    }
  }

  return (
    <section className="w-full h-fit lg:px-[30vw] md:px-[10rem] px-[10px] pt-[2rem] flex">
      <div className="w-full h-full bg-[#1C1C1C] p-5 flex flex-col gap-10 rounded-lg">
        <h1 className="text-white text-3xl font-bold">What to do?</h1>
        <form
          onSubmit={handleTodoAction}
          className="w-full h-full flex flex-col justify-center items-center gap-8"
        >
          <div className="w-full relative">
            <input
              className="outline-none w-full h-[50px] bg-transparent border-2 border-[#5D5D5D] text-white px-3 py-2 rounded-lg placeholder:text-[#5D5D5D] placeholder:text-xl text-xl"
              type="text"
              placeholder="Enter your task"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
            />
            <span className="absolute right-3 bottom-3 text-[#5D5D5D] text-sm">
              {title.length}/{maxTitleLength}
            </span>
          </div>
          <div className="w-full relative">
            <textarea
              className="outline-none w-full min-h-[120px] max-h-[180px] h-[100px] bg-transparent border-2 border-[#5D5D5D] text-white px-3 py-2 rounded-lg placeholder:text-[#5D5D5D] placeholder:text-xl text-xl"
              placeholder="Enter Todo Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value.slice(0, maxDescLength))}
            ></textarea>
            <span className="absolute right-3 bottom-3 text-[#5D5D5D] text-sm">
              {desc.length}/{maxDescLength}
            </span>
          </div>
          <button
            type="submit"
            className="w-full h-[50px] bg-[#ffffff] text-black text-xl font-bold rounded-lg"
          >
            {action} Todo
          </button>
        </form>
      </div>
    </section>
  );
};

export default TodoForm;
