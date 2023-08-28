"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>증가</button>
    </>
  );
};

export default Counter;
