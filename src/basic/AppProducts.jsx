import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

// 0. sale중인 아이템 가져오기
// 1. 로딩 만들기
// 2. 에러 만들기
