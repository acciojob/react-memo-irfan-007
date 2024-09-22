import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  console.log("counter");

  return (
    <div id="main">
      <UseMemo />
      <div>
        Count: <span id="incr-cnt">{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>Expensive Calculation</h1>
        <p id="calc">1000000000</p>
      </div>
      <ReactMemo list={list} setList={setList} />
    </div>
  );
}

export default App;
