import React from "react";

const Prompt = (props) => {
  const prompts = [
    {
      prompt: "length",
      text:
        "Choose length of password. Length must be between 8-128 characters...",
      type: "number",
    },
    {
      prompt: "lowerCase",
      text: "Use lowercase characters (abc)",
      type: "checkbox",
    },
    {
      prompt: "upperCase",
      text: "Use uppercase characters (ABC)",
      type: "checkbox",
    },
    {
      prompt: "numbers",
      text: "Use numeric characters (123)",
      type: "checkbox",
    },
    {
      prompt: "specialCharacters",
      text: "Use special characters (*%&)",
      type: "checkbox",
    },
  ];

  return (
    <>
      {/* validation messages display if criteria not met on generate click */}
      <p style={{ color: "red", fontWeight: "bold" }}>
        {props.validation["lengthValidation"]}
      </p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        {props.validation["characterValidation"]}
      </p>

      {prompts.map((prompt, index) => (
        <React.Fragment key={index}>
          {/* you need to make THESE inputs change the state of the parent WITHOUT removing the previous. Be sure to look up the spread operator */}

          <h6
            style={{
              fontWeight: "light",
              marginBottom: "2px",
              color:
                props.back["background"] === "dark"
                  ? "#008b10"
                  : props.back["background"] === "light"
                  ? "gray"
                  : "#2657EB",
              textShadow:
                props.back["background"] === "dark"
                  ? "2px 3px 4px black"
                  : "2px 3px 4px lightgray",
            }}
          >
            {prompt.text}
          </h6>

          <input
            type={prompt.type}
            style={{
              border: "1px solid lightgray",
              borderRadius: "5px",
              marginBottom: "5px",
              backgroundColor:
                props.back["background"] === "dark" ? "#525252" : "whitesmoke",
              borderColor:
                props.back["background"] === "dark" ? "#525252" : "whitesmoke",
              boxShadow:
                props.back["background"] === "dark"
                  ? "3px 4px 8px black"
                  : "3px 4px 8px lightgray",
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
    </>
  );
};

export default Prompt;
