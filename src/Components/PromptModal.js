import React, { useState } from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  const [validation, setValidationState] = useState({
    lengthValidation: "",
    characterValidation: "",
  });

  const caseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];

  const specialCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "/",
    ":",
    ";",
    "''",
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
  ];

  const promptValidation = () => {
    // if both password length AND character type don't meet criteria
    if (
      (props.promptstate["length"] < 8 ||
        props.promptstate["length"] > 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      setValidationState({
        ...validation,
        ["lengthValidation"]:
          "Password length must be between 8-128 characters...",
        ["characterValidation"]:
          "At least one character type should be selected...",
      });
    }
    // if password length does NOT meet criteria and character type does meet criteria
    else if (
      (props.promptstate["length"] < 8 ||
        props.promptstate["length"] > 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      (props.promptstate["specialCharacters"] ||
        props.promptstate["upperCase"] ||
        props.promptstate["lowerCase"] ||
        props.promptstate["numbers"])
    ) {
      setValidationState({
        ...validation,
        ["lengthValidation"]:
          "Password length must be between 8-128 characters...",
        ["characterValidation"]: "",
      });
    }
    // if password length does meet criteria and character type does NOT meet criteria
    else if (
      (props.promptstate["length"] >= 8 ||
        props.promptstate["length"] <= 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      setValidationState({
        ...validation,
        ["lengthValidation"]: "",
        ["characterValidation"]:
          "At least one character type should be selected...",
      });
    }
    // If both password length AND character type meet criteria
    else {
      setValidationState({
        ...validation,
        ["lengthValidation"]: "",
        ["characterValidation"]: "",
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Prompt
          promptstate={props.promptstate}
          setpromptstate={props.setpromptstate}
          lenValidation={validation["lengthValidation"]}
          charValidation={validation["characterValidation"]}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="info"
          // call validation on generate click each time
          onClick={() => {
            promptValidation();
          }}
        >
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
