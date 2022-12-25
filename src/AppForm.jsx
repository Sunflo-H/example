import React, { useState } from "react";

export default function AppForm() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름 : </label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></input>
      <label htmlFor="email">이메일 : </label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <button>Submit</button>
    </form>
  );
}
