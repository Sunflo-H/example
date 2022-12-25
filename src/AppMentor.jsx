import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });

  const clickHandler1 = () => {
    const input = prompt("멘토 이름을 입력해주세요");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, name: input },
    }));
  };
  const clickHandler2 = () => {
    const input = prompt("멘토 타이틀을 입력해주세요");
    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, title: input },
    }));
  };

  return (
    <div>
      <h1>{person.name}는 개발자</h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={clickHandler1}>멘토 이름 바꾸기</button>
      <button onClick={clickHandler2}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
