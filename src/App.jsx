import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const todos = [
    'test1',
    'test2',
    'test3'
  ]

  return (
    <div>
      <TodoInput />
      <TodoList todos={todos}/>
    </div>

  )
}

export default App
