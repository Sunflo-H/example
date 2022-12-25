import React from "react";

function Avatar({ title, isNew }) {
  return (
    <div className="avatar">
      <img
        className="photo"
        src={`https://source.unsplash.com/featured/?${title}`}
        alt="avatar"
      />
      {isNew && <div className="new">NEW</div>}
    </div>
  );
}

export default Avatar;
