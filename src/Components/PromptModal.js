import React, { useState } from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  const [validation, setValidationState] = useState({
    lengthValidation: "",
    characterValidation: "",
  });

  const promptValidation = () => {
    // if password length doesn't meet criteria set state to error message
    if (
      props.promptstate["length"] < 8 ||
      props.promptstate["length"] > 128 ||
      Number.isNaN(props.promptstate["length"])
    ) {
      setValidationState({
        ...validation,
        ["lengthValidation"]:
          "Password length must be between 8-128 characters...",
      });
    } else {
      setValidationState({
        ...validation,
        ["lengthValidation"]: "",
      });
    }

    // if password characters aren't selected at all set state to error message
    if (
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      setValidationState({
        ...validation,
        ["characterValidation"]:
          "At least one character type should be selected...",
      });
    }
    // if password does meet require set state back to empty string
    else {
      setValidationState({
        ...validation,
        ["characterValidation"]: "",
      });
    }

    console.log(validation);
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
