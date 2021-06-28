import "./Todo.css";
import { useState } from "react";
import TodoList from "../todolist/todo-list.js";
import TodoCreate from "../todocreate/Todocreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([{ id: 1, title: "React" }]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div>
      <h3>Todo List </h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList datatodos={getTodos} />
    </div>
  );
};

export default Todo;
