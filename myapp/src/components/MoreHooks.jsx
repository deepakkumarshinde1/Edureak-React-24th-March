// avoid freezing of app or improve app performance
// We use useMemo or useCallback

import { useState } from "react";

const MoreHooks = (props) => {
  let [count, setCount] = useState(1);
  let [square, setSquare] = useState(2);

  let calcSquare = () => {
    for (let index = 0; index < 1000; index++) {
      console.log("loop");
    }
    setSquare(square * square);
  };
  return (
    <>
      <button onClick={() => setCount(++count)}>CLICK</button>
      <h1>{count}</h1>
      <button onClick={calcSquare}>Square</button>
      <h1>{square}</h1>
    </>
  );
};

export default MoreHooks;
