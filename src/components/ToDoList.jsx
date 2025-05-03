import { useState } from "react";
import "./TodoList.css";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setItems([...items, input.trim()]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">ToDo List</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
