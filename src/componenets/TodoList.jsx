import { useSelector } from "react-redux";
import { selectTodos } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
