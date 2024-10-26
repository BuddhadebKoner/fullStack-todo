import TodoForm from "./components/TodoForm"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <main className="w-full flex justify-center items-center flex-col">
        <TodoForm
          action="Add"
        />
        <Todos />
      </main>
    </>
  )
}

export default App
