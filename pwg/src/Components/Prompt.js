import React from "react";

const Prompt = (props) => {
  const prompts = [
    "Choose length of password. Length must be between 8-128 characters:",
    "Use lowercase characters:",
    "Use uppercase characters:",
    "Use numeric characters:",
    "Use special characters:",
  ];
  return (
    <div>
      <p>{props.prompt}</p>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Prompt;
