import "./App.css";
import React, { useState } from "react";
import Form from "./components/toDoForm";
import List from "./components/toDoList";

export default function App() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrent] = useState([])
  const getInputValue = (e) => {setCurrent(e.target.value)}

  const addTodo = (e) => {
    e.preventDefault()
    const todoValue = document.querySelector("#todo-input").value
    if(todoValue!==''){
      setTodos([
      ...todos,
      {
        todo: document.querySelector("#todo-input").value,
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

  return (
    <>
      <Form func={addTodo} func2={getInputValue} />
      <div className="tasksbox">
        <List 
          arr={todos} 
          moveTodo={moveTodo} 
          removeTodo={removeTodo} 
          status={true}
          currentTodo={currentTodo}
          />
        <List
          arr={todos}
          moveTodo={moveTodo}
          removeTodo={removeTodo}
          status={false}
        />
      </div>
    </>
  );
}
