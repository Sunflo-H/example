import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdata = () => {
    const prev = prompt("누구의 이름을 바꾸고 싶어?");
    const current = prompt("이름을 뭐로 바꾸고 싶어?");

    dispatch({ type: "updated", prev, current });
  };

  const handleAdd = () => {
    const name = prompt("추가할 이름을 입력해");
    const title = prompt("추가할 타이틀을 입력해");
    const id = 3;

    dispatch({ type: "added", name, title, id });
  };

  const handleDelete = () => {
    const name = prompt("삭제할 이름을 입력해");
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>{person.name}는 개발자</h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdata}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 이름 추가하기</button>
      <button onClick={handleDelete}>멘토 이름 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
      id: 1,
    },
    {
      name: "제임스",
      title: "시니어개발자",
      id: 2,
    },
  ],
};
