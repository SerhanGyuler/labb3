import React from "react";

function ToDoItem({ todo, toggleComplete, removeTodo }) {
  return (
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
  );
}

export default ToDoItem;
