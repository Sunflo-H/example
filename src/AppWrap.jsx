import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar backgroundColor="red">
        <h1>안녕하세요</h1>
      </Navbar>
      <Navbar backgroundColor="yellow">
        <h1>Hello</h1>
      </Navbar>
      <Navbar backgroundColor="blue">
        <h1>니하오</h1>
      </Navbar>
    </div>
  );
}

// function Navbar({ children, backgroundColor }) {
function Navbar(props) {
  return (
    <header style={{ backgroundColor: props.backgroundColor }}>
      <Avatar title="woman" name="bob" size={200} />
      {props.children}
    </header>
  );
}

function Avatar({ title, name, size }) {
  return (
    <div className="avatar">
      <img
        className="photo"
        src={`https://source.unsplash.com/featured/?${title}`}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
