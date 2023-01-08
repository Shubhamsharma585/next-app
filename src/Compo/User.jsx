import React from "react";

function User({ name, username }) {
  //
  return (
    <div style={{ border: "2px solid violet" }}>
      User
      <h2>{name}</h2>
      <h4>{username}</h4>
    </div>
  );
}

export default User;
