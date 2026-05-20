# PE03 - ToDo List App

A basic ToDo list application built with **React** and the **`useState`** hook for CS628 Programming Exercise 03. Users can add new tasks and delete existing ones through a clean, styled interface.

## How to Run

```bash
cd PE03-ToDoList
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

## Project Structure

```
PE03-ToDoList/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    └── components/
        ├── ToDoList.jsx
        └── ToDoTask.jsx
```

---

# Input

The user provides input through a single text field at the top of the page where they type a ToDo description. Two interaction events feed the application: clicking the **Add Task** button (or pressing the **Enter** key) submits the typed text, and clicking the **Delete** button on any individual task removes that specific item. The text field is a controlled component bound to a React state variable, so every keystroke updates state in real time.

# Process

The `App` component manages two pieces of state with the `useState` hook: `input` (the current text in the field) and `todos` (the array of tasks). When **Add Task** fires, `handleAdd` trims the input, builds a new task object with a unique `id` (timestamp) and `text`, then calls `setTodos([...todos, newTodo])` to immutably append it and clears the input. When **Delete** fires, `handleDelete` calls `setTodos(todos.filter(t => t.id !== id))` to immutably remove the item. The `todos` array is passed to the `ToDoList` component, which uses `.map()` to render a `ToDoTask` component for each task.

# Output

The output is the dynamically rendered list of tasks displayed below the input field. Each task appears as a styled card showing its description alongside a red **Delete** button. When the list is empty, a friendly placeholder message is shown instead. Because state changes trigger automatic re-rendering in React, the UI always reflects the current `todos` array — additions appear instantly at the bottom of the list, and deletions remove items immediately, giving the user clear, real-time visual feedback.
