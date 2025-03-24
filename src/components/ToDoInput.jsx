import React from "react";

function ToDoInput({ inputValue, setInputValue, addTodo }) {
  return (
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
  );
}

export default ToDoInput;
