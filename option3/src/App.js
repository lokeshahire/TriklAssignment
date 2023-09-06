import React, { useState, useEffect } from "react";
import "./App.css";

import { fetchTodos } from "./apis/todosApi";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
      // console.log(data);
    });
  }, []);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAdd = (newTodo) => {
    const id = todos.length + 1;
    const todo = { ...newTodo, id };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  // console.log("AppImage", image);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
