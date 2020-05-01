import React, { useState } from "react";

const Prompt = (props) => {
  const prompts = [
    {
      prompt: "length",
      text:
        "Choose length of password. Length must be between 8-128 characters:",
      type: "number",
    },
    {
      prompt: "lowerCase",
      text: "Use lowercase characters:",
      type: "checkbox",
    },
    {
      prompt: "upperCase",
      text: "Use uppercase characters:",
      type: "checkbox",
    },
    {
      prompt: "numbers",
      text: "Use numeric characters:",
      type: "checkbox",
    },
    {
      prompt: "specialCharacters",
      text: "Use special characters:",
      type: "checkbox",
    },
  ];

  const [validstate, setValidState] = useState({
    character: false,
    number: false,
  });

  if (validstate["character"] && validstate["number"]) {
    console.log(props.validation["active"]);
    props.setActiveButtonState({
      ...props.activebutt,
      [props.activebutt["active"]]: true,
    });
  }

  return (
    <div>
      {/* validation messages display if criteria not met on generate click */}
      <p style={{ color: "red", fontWeight: "bold" }}>
        {props.validation["lengthValidation"]}
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        {props.validation["characterValidation"]}
      </p>

      {prompts.map((prompt, index) => (
        <React.Fragment>
          {/* you need to make THESE inputs change the state of the parent WITHOUT removing the previous. Be sure to look up the spread operator */}
          <h6 key={index} style={{ fontWeight: "bold" }}>
            {prompt.text}
          </h6>
          <input
            type={prompt.type}
            onChange={(e) =>
              // input onchange events

              prompt.type === "number"
                ? (props.setpromptstate({
                    ...props.promptstate,
                    [prompt.prompt]: parseInt(e.target.value),
                  }),
                  parseInt(e.target.value) >= 8 &&
                  parseInt(e.target.value) <= 128
                    ? setValidState({ ...validstate, number: true })
                    : setValidState({ ...validstate, number: false }))
                : (props.setpromptstate({
                    ...props.promptstate,
                    [prompt.prompt]: !props.promptstate[prompt.prompt],
                  }),
                  props.promptstate["specialCharacters"] ||
                  props.promptstate["upperCase"] ||
                  props.promptstate["lowerCase"] ||
                  props.promptstate["number"]
                    ? setValidState({ ...validstate, character: true })
                    : setValidState({ ...validstate, character: false }),
                  console.log(validstate))
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Prompt;
