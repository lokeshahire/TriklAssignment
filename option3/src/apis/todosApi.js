const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
