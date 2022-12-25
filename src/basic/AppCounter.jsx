import React, { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const clickHandler = (e) => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      {count <= 10 ? (
        <div className="total">Total Count: {count} 🤔</div>
      ) : (
        <div className="total">Total Count: {count} 😲</div>
      )}

      <Counter total={count} totalHandler={clickHandler} />
      <Counter total={count} totalHandler={clickHandler} />
    </>
  );
}
