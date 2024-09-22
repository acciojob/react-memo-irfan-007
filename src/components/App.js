import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  console.log("counter");

  return (
    <div>
      <UseMemo />
      <div>
        Count:{count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <ReactMemo list={list} setList={setList} />
    </div>
  );
}

export default App;
