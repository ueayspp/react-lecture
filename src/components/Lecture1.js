import React, { useState } from "react";

function Lecture1() {
  let [a, setA] = useState("");
  let [b, setB] = useState("");
  let [c, setC] = useState("");

  return (
    <div>
      <h1>Lecture 1</h1>
      <input
        type="number"
        placeholder="Enter the first number..."
        value={a}
        onChange={(event) => setA(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter the second number..."
        value={b}
        onChange={(event) => setB(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Here the sum!"
        value={c}
        onChange={(event) => setC(event.target.value)}
      />
      <br />
      <button onClick={() => setC(Number(a) + Number(b))}>add</button>
    </div>
  );
}

export default Lecture1;
