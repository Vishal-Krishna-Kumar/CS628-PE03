import { useState } from 'react';
import ToDoList from './components/ToDoList.jsx';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const text = input.trim();
    if (text === '') return;
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <p className="subtitle">CS628 PE03 - Built with React &amp; useState</p>

      <div className="input-row">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a ToDo description..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-btn" onClick={handleAdd}>
          Add Task
        </button>
      </div>

      <ToDoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}
