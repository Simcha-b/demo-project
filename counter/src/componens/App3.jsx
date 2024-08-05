import React from "react";
import { Counter } from "./Counter";

function App3() {
  function cntFactory(num) {
    const arr = [];
    for (let index = 1; index <= num; index++) {
      arr.push(index);
    }
    return arr;
  }
  return (
    <div style={{textAlign:"center"}}>
      {cntFactory(5).map((item) => {
        return <Counter index={item}/>;
      })}
    </div>
  );
}

export default App3;
