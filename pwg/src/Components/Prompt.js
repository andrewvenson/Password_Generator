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
      <h6 style={{ fontWeight: "bold" }}>{prompts[props.promptcount]}</h6>
      <input type={props.promptcount == 0 ? "number" : "checkbox"} />
    </div>
  );
};

export default Prompt;
