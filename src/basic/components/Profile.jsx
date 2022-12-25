import React from "react";
import Avatar from "./Avatar";

export default function Profile({ name, job, isNew }) {
  return (
    <div className="profile">
      <Avatar title="snow" isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
