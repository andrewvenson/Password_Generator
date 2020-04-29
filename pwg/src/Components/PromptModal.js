import React from "react";
import { Modal, Button } from "react-bootstrap";
import Prompt from "./Prompt";

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
          promptcount={props.promptindex}
          promptfunc={props.promptfuncs}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={() => props.nextcount()}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromptModal;
