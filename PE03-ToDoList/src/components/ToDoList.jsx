import ToDoTask from './ToDoTask.jsx';

export default function ToDoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoTask key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}
