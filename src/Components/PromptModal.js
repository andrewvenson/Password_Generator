import React from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  let lengthValidation = "";
  let characterValidation = "";

  const PromptValidation = () => {
    if (props.promptstate["length"] < 8 || props.promptstate["length"] > 128) {
      lengthValidation =
        "length of password should be between 8-128 characters";
    }

    if (
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      characterValidation = "At least one character type should be selected";
    }

    console.log(lengthValidation, characterValidation);
    console.log(props.promptstate);
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
          lenValidation={lengthValidation}
          charValidation={characterValidation}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="info"
          onClick={() => {
            PromptValidation();
          }}
        >
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
