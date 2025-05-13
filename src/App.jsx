import AddTodo from "./componenets/AddTodo";
import TodoList from "./componenets/TodoList";

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
