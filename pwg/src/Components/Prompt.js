import React from "react";

const Prompt = (props) => {
  const prompts = [
    "Enter length of password. Length must be between 8-128 characters:",
    "Check box to use lowercase characters:",
    "Check box to use uppercase characters:",
    "Check box to use numeric characters:",
    "Check box to use special characters:",
  ];

  return (
    <div>
      <h6 style={{ fontWeight: "bold", color: "gray" }}>
        {prompts[props.promptcount]}
      </h6>
      {/* input changes type upon prompt count change | value should be passed to prompt.promptfunc, but first value stays static through out all input changes */}
      {/* e.target.value should change upon new input and then ultimatly bubble up to change the specific state according to new value */}
      <input
        type={props.promptcount === 0 ? "number" : "checkbox"}
        onChange={(e) => {
          props.promptfunc(e.target.value);
        }}
      />
    </div>
  );
};

export default Prompt;
