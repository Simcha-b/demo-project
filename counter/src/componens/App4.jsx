import React, { useState } from "react";
import NumKey from "./NumKey";
function App4() {
  const [sum, setSum] = useState(0);
  function add(event) {
    setSum(sum + Number(event.target.textContent));
    console.log(event);
    console.log(event.target.tag);
  }
  function addKey(num) {
    const arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(<NumKey key={index} number={index} click={add} />);
    }
    return arr;
  }
  return (
    <div>
      <p>{sum}</p>
      {addKey(10)}
    </div>
  );
}

export default App4;
