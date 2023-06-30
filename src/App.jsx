import "./App.css";
import { useState, useMemo} from "react";
import Form from "./components/toDoForm";
import List from "./components/toDoList";

export default function App() {

  const [currentTodos, setCurrentTodos] = useState([])
  const [doneTodos, setDoneTodos] = useState([])

  const [currentTodo, setCurrentTodo] = useState('')

  const getInputValue = (e) => setCurrentTodo(e.target.value)

  const addTodo = (e) => {
    e.preventDefault()
    if(currentTodo.trim() !== ''){
      setCurrentTodos((prevCurrentTodos) => [
        ...prevCurrentTodos,
      {
        todo: currentTodo,
        id: crypto.randomUUID(),
        status: true,
      }
    ])
    setCurrentTodo('')
    }
  }
 
  const removeTodo = (id) => setDoneTodos((prevDoneTodos) => prevDoneTodos.filter((todo) => todo.id !== id))
  
  const moveTodo = (todo, id, status) => {
    const movedTodo = {todo, id, status: !status}
    if (status) {
      setCurrentTodos((prevCurrentTodos) => prevCurrentTodos.filter(x => x.id !== id))
      setDoneTodos((prevDoneTodos) => [...prevDoneTodos, movedTodo])
    } else {
      setDoneTodos((prevDoneTodos) => prevDoneTodos.filter(x => x.id !== id))
      setCurrentTodos((prevCurrentTodos) => [...prevCurrentTodos, movedTodo])
    }
  }

  const currentData = useMemo(() => [currentTodos, moveTodo, removeTodo], [currentTodos])
  const doneData = useMemo(() => [doneTodos, moveTodo, removeTodo], [doneTodos])

  return (
    <>
      <Form addTodo={addTodo} getInputValue={getInputValue} currentTodo={currentTodo}/>
      <div className="tasksbox">
        <List 
          data={currentData}
          status={true}
          currentTodo={currentTodo}
          />
        <List
          data={doneData}
          status={false}
        />
      </div>
    </>
  )
}
