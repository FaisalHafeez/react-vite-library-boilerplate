import React from "react";

export default function HelloWorld(props) {
  const { greetee } = props;

  return <div>Hello, {greetee}!</div>;
}
