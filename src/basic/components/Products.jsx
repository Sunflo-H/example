import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const [count, setCount] = useState(0);
  const handleChange = () => setChecked((prev) => !prev);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(undefined);
  //   fetch(`data/${checked ? "sale_" : ""}dproducts.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // 여기서 로딩중을 해제해
  //       setLoading((prev) => !prev);
  //       console.log("🔥 네트워크에서 갓 받아온 뜨끈한 데이터");
  //       setProducts(data);
  //     })
  //     .catch((e) => setError("에러가 발생함!"))
  //     .finally(() => setLoading(false));

  //   return () => {
  //     console.log("🧹깨끗하게 청소하는 일을 합니다.");
  //   };
  // }, [checked]);

  if (loading) return <h1>로딩중</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show only 🔥 SALE 🔥🔥</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
