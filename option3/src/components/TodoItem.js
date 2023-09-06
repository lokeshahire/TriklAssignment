import React from "react";
import "./Todo.css";

const TodoItem = ({ todo, image, onDelete }) => {
  return (
    <div className="todo-item">
      <img src={image} alt="Todo" />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
