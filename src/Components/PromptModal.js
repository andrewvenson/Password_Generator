import React from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
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
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={() => console.log(props.promptstate)}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
