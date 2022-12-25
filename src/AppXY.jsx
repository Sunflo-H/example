import React, { useEffect, useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 50 });

  const moveHandler = (e) => {
    // setPosition({ x: e.clientX, y: 500 });
    setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className="container" onPointerMove={moveHandler}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      ></div>
    </div>
  );
}
