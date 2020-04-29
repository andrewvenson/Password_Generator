import React from "react";

const Prompt = (props) => {
  const prompts = [
    {
      text:
        "Choose length of password. Length must be between 8-128 characters:",
      type: "number",
    },
    {
      text: "Use lowercase characters:",
      type: "checkbox",
    },
    {
      text: "Use uppercase characters:",
      type: "checkbox",
    },
    {
      text: "Use numeric characters:",
      type: "checkbox",
    },
    {
      text: "Use special characters:",
      type: "checkbox",
    },
  ];

  return (
    <div>
      {prompts.map((prompt, index) => (
        <React.Fragment>
          {/* you need to make THESE inputs change the state of the parent WITHOUT removing the previous. Be sure to look up the spread operator */}
          <h6 key={index} style={{ fontWeight: "bold" }}>
            {prompt.text}
          </h6>
          <input type={prompt.type} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Prompt;
