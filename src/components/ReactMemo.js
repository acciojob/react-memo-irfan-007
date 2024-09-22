import React, { memo, useState } from "react";
const ReactMemo = ({ list, setList }) => {
  const [task, setTask] = useState("");

  console.log("memo");

  return (
    <div>
      <h1>React.memo</h1>
      <input
        type="text"
        minLength={6}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => setList([...list, task])}>Add Skill</button>
      <ul>
        {list.map((k, i) => (
          <li key={i}>{k}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReactMemo);
