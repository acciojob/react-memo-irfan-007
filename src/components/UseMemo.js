import React, { useMemo, useState } from "react";

function UseMemo() {
  const [todo, setTodo] = useState([]);
  function clickFn() {
    setTodo([...todo, "New Todo"]);
  }
  const showTodos = useMemo(() => {
    console.log("task added");

    return (
      <div>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        {todo.map((k, i) => (
          <p key={i} id={`todo-${i}`}>
            {k}
          </p>
        ))}
        <button id="add-todo-btn" onClick={clickFn}>
          Add Todo
        </button>
      </div>
    );
  }, [todo]);

  return showTodos;
}

export default UseMemo;
