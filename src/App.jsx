import "./App.css";
import { useState} from "react";
import Form from "./components/toDoForm";
import List from "./components/toDoList";

export default function App() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrent] = useState([])

  const getInputValue = (e) => setCurrent(e.target.value)

  const addTodo = (e) => {
    e.preventDefault()
    const todoValue = document.querySelector("#todo-input").value
    if(todoValue!==''){
      setTodos([
      ...todos,
      {
        todo: currentTodo,
        id: crypto.randomUUID(),
        status: true,
      }
    ])
    setCurrent()
    document.querySelector("#todo-input").value = ''
    }
  }
  const removeTodo = (id) => setTodos([...todos.filter((x) => x.id !== id)])
  const moveTodo = (todo, id, status) => setTodos(
    [
      ...(todos.filter((x) => x.id !== id)),
      {todo:todo, id:id, status:!status}
    ]
  )
  const data = [todos, moveTodo, removeTodo]
  return (
    <>
      <Form addTodo={addTodo} getInputValue={getInputValue}/>
      <div className="tasksbox">
        <List 
          data={data}
          status={true}
          currentTodo={currentTodo}
          />
        <List
          data={data}
          status={false}
        />
      </div>
    </>
  )
}
