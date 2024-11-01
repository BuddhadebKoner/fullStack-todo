import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [formAction, setFormAction] = useState<"Add" | "Update">("Add");
  const [editingTodo, setEditingTodo] = useState<any | null>(null);
  const [refreshTodo, setRefreshTodo] = useState<boolean>(false);

  const handleEditTodo = (todo: any) => {
    setFormAction("Update");
    setEditingTodo(todo);
  };

  // Reset form after completing the action
  const handleFormComplete = () => {
    setFormAction("Add");
    setEditingTodo(null);
    setRefreshTodo(!refreshTodo);
  };

  return (
    <main className="w-full flex justify-center items-center flex-col">
      <TodoForm action={formAction} todo={editingTodo} onComplete={handleFormComplete} />
      <Todos onEditTodo={handleEditTodo} refreshTodo={refreshTodo} />
    </main>
  );
}

export default App;
