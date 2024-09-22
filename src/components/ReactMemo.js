import React, { memo, useState } from "react";
const ReactMemo = ({ list, setList }) => {
  const [task, setTask] = useState("");

  console.log("memo");

  return (
    <div>
      <h1>React.memo</h1>
      <input
        id="skill-input"
        type="text"
        minLength={6}
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="skill-btn" onClick={() => setList([...list, task])}>
        Add Skill
      </button>
      <ul id="item-jumbotron">
        {list.map((k, i) => (
          <li key={i}>{k}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReactMemo);
