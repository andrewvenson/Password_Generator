import React from "react";

const Prompt = (props) => {
  const prompts = [
    {
      prompt: "length",
      text:
        "Choose length of password. Length must be between 8-128 characters",
      type: "number",
    },
    {
      prompt: "lowerCase",
      text: "Use lowercase characters",
      type: "checkbox",
    },
    {
      prompt: "upperCase",
      text: "Use uppercase characters",
      type: "checkbox",
    },
    {
      prompt: "numbers",
      text: "Use numeric characters",
      type: "checkbox",
    },
    {
      prompt: "specialCharacters",
      text: "Use special characters",
      type: "checkbox",
    },
  ];

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

          <h6
            key={index}
            style={{
              fontWeight: "light",
              marginBottom: "2px",
              color: "#17A2B8",
              textShadow: "2px 3px 4px lightgray",
            }}
          >
            {prompt.text}...
          </h6>

          <input
            type={prompt.type}
            style={{
              border: "1px solid lightgray",
              borderRadius: "5px",
              marginBottom: "5px",
              boxShadow: "3px 4px 8px lightgray",
            }}
            onChange={(e) =>
              // input onchange events
              prompt.type === "number"
                ? props.setpromptstate({
                    ...props.promptstate,
                    [prompt.prompt]: parseInt(e.target.value),
                  })
                : props.setpromptstate({
                    ...props.promptstate,
                    [prompt.prompt]: !props.promptstate[prompt.prompt],
                  })
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Prompt;
