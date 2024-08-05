import React, { useState } from "react";

export function Counter({ index }) {
  const [cnt, setCnt] = useState(0);
  function inc() {
    setCnt(cnt + index);
  }
  function dec() {
    setCnt(cnt - index);
  }
  function rst() {
    setCnt(0);
  }
  return (
    <div>
    <h3>counter #{index}</h3>
      <p>{cnt}</p>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rst}>RST</button>
    </div>
  );
}
