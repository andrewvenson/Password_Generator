import React from "react";

const Prompt = (props) => {
  return (
    <>
      <p>{props.question}</p>
      <input placeholder={props.placeholder} type={props.type} />
    </>
  );
};

export default Prompt;
