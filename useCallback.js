import React, { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  const [num, setNum] = useState(10);
  const addMe = useCallback(() => {}, [num]);
  return (
    <div>
      <h1>App.js</h1>
      <button onClick={() => setNum(num + 1)}>Add: {num}</button>
      <Child addMe={addMe} />
    </div>
  );
};

export default App;
