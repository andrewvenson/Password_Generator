import React from "react";

const Prompt = (props) => {
  return (
    <div>
      <p>{props.prompt}</p>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default Prompt;
