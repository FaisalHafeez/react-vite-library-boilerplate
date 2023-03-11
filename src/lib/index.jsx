import React from "react";

export default function HelloWorld(props) {
  const {
    user: { id, name, email, avatar },
  } = props;
console.log(props )
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <img src={avatar} alt={name} />
    </div>
  );
}
