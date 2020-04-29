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
        <Prompt promptcount={props.promptindex} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={() => console.log("rethink")}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
