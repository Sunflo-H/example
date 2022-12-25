import React, { useEffect, useState } from "react";

// 커스텀 hook을 만들었다.
// react에서 hook 은 함수라고 생각하면 된다.
// 따라서 커스텀 hook은 함수처럼 로직들을 따로 hook안에서 다루고
// 결과값을 return 한다.
// 이렇게 만들어진 커스텀 훅은 어느곳에서나 쓸 수 있다.
// 컴포넌트1과 컴포넌트2에서 호출되었다면 각각 다르게 처리된다.
// 호출된 컴포넌트마다 공유되지 않는다.

// 규칙 use를 이름에 붙여야한다.
// jsx대신 외부와 공유하고싶은 데이터를 return 한다

// * 훅은 로직의 재사용을 위한것이다.

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setLoading((prev) => !prev);
        console.log("🔥 네트워크에서 갓 받아온 뜨끈한 데이터");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생함!"))
      .finally(() => setLoading(false));

    return () => {
      console.log("🧹깨끗하게 청소하는 일을 합니다.");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
