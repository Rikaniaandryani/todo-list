import "./todo-list.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.datatodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
