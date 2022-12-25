import React, { useState } from "react";

export default function Counter({ total, totalHandler }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="number">
        <span className="count">{count}</span>
        <span className="totalCount">/{total}</span>
      </div>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
          totalHandler();
        }}
      >
        Add +
      </button>
    </div>
  );
}
