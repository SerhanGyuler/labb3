import React, { useState, useEffect } from "react";

function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="ToDoList">
      <div className="header">
        <p>Todo List</p>
      </div>

      <div className="toDoInput">
        <input
          type="text"
          placeholder="Add a To do"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="addToDo" onClick={addTodo}>
          Add
        </button>
      </div>

      {todos.map((todo) => (
        <div key={todo.id} className="todoItem">
          <div className="todocontainer">
            <span>{todo.text}</span>
          </div>

          <div className="todoother">
            <span>Status:</span>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.completed ? "Finished" : "Pending"}
            </p>
            <button onClick={() => toggleComplete(todo.id)}>
              Mark as {todo.completed ? "Incomplete" : "Completed"}
            </button>

            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
