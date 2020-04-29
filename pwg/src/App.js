import React, { useState } from "react";
import "./App.css";
import Prompt from "./Components/Prompt";
import { Container, Button, Modal } from "react-bootstrap";

//
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

const App = () => {
  // truthy/falsy states
  const [lowerCase, setLowercase] = useState(false);
  const [upperCase, setUppercase] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  // sets lc val from prompt input
  const setLowercaseState = (lcval) => {
    setLowercase(lcval);
    console.log(lcval);
  };

  // sets uc val from prompt input
  const setUppercaseState = (ucval) => {
    setUppercase(ucval);
    console.log(ucval);
  };

  // sets numeric bool from prompt input
  const setNumericState = (numval) => {
    setNumeric(numval);
    console.log(numval);
  };

  // sets spec char bool from prompt input
  const setSpecialCharsState = (charsval) => {
    setSpecialChars(charsval);
    console.log(charsval);
  };

  // numeric states
  const [pwLength, setPwLength] = useState(0);
  const [promptCount, setPromptCount] = useState(0);

  // sets pw length from prompt input
  const setPwLengthState = (pwlength) => {
    setPwLength(pwlength);
    console.log(pwlength);
  };

  // increments promptCount state by 1
  const setPromptCountState = () => {
    setPromptCount(promptCount + 1);
    console.log(promptCount);
  };

  // set promptcount state to zero
  const setPromptZero = () => {
    setPromptCount(0);
  };

  // string states
  const [generatedPw, setGenPw] = useState(
    "No password generated yet... click button to generate password"
  );

  // new generated password
  const setGenPwState = () => {
    console.log(generatedPw);
  };

  // state for modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "300px",
          border: "1px solid #f2f2f2",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "4px 8px 16px lightgray",
          position: "relative",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Password Generator</p>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "25px",
            textShadow: "2px 4px 5px gray",
            borderRadius: "4px",
          }}
        >
          <p style={{ color: "whitesmoke" }}>{generatedPw}</p>
        </div>
        <Button
          style={{ position: "absolute", right: "5px", bottom: "5px" }}
          variant="info"
          onClick={() => {
            setModalShow(true);
            setPromptZero();
          }}
        >
          Generate Password
        </Button>
      </div>

      {/* prompt modal */}
      <PromptModal
        nextcount={setPromptCountState}
        promptindex={promptCount}
        show={modalShow}
        promptfuncs={
          promptCount == 0
            ? setNumericState
            : promptCount == 1
            ? setLowercaseState
            : promptCount == 2
            ? setUppercaseState
            : promptCount == 3
            ? setNumericState
            : promptCount == 4
            ? setSpecialCharsState
            : "nada"
        }
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default App;
