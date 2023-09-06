import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  const [imageUrls, setImageUrls] = useState([]);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/200/300");
      if (response.status === 200) {
        return response.url;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      return "";
    }
  };

  useEffect(() => {
    const fetchImagesForTodos = async () => {
      const urls = await Promise.all(
        todos.map((_, index) => fetchRandomImage())
      );
      setImageUrls(urls);
    };

    fetchImagesForTodos();
  }, [todos]);

  console.log("imageUrls", imageUrls);

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            image={imageUrls[index]}
            todo={todo}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
