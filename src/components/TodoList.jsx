import { useSelector, useDispatch } from "react-redux";
import { selectTodos, removeTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <div>
            <p style={{ margin: 0 }}>{todo.text}</p>
            <small style={{ color: "#888" }}>Added: {todo.timestamp}</small>
          </div>
          <button
            onClick={() => handleRemove(todo.id)}
            style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;