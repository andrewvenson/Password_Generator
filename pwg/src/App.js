import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import PromptModal from "./Components/PromptModal";

const App = () => {
  // truthy/falsy states
  const [lowerCase, setLowercase] = useState(false);
  const [upperCase, setUppercase] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  // sets lc val from prompt input
  const setLowercaseState = (lcval) => {
    setLowercase(lcval);
    console.log("lcval", lcval);
  };

  // sets uc val from prompt input
  const setUppercaseState = (ucval) => {
    setUppercase(ucval);
    console.log("ucval", ucval);
  };

  // sets numeric bool from prompt input
  const setNumericState = (numval) => {
    setNumeric(numval);
    console.log("numval", numval);
  };

  // sets spec char bool from prompt input
  const setSpecialCharsState = (charsval) => {
    setSpecialChars(charsval);
    console.log("charsval", charsval);
  };

  // numeric states
  const [pwLength, setPwLength] = useState(0);
  const [promptCount, setPromptCount] = useState(0);

  // sets pw length from prompt input
  const setPwLengthState = (pwlength) => {
    setPwLength(pwlength);
  };

  // set promptcount state to zero
  const setPromptZero = () => {
    setPromptCount(0);
  };

  // string states
  const [generatedPw, setGenPw] = useState(
    "No password generated yet... click button to generate password"
  );

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
        promptindex={promptCount}
        show={modalShow}
        // prompt count changes set state function being used to change the specific state
        promptfuncs={
          promptCount === 0
            ? setPwLengthState
            : promptCount === 1
            ? setLowercaseState
            : promptCount === 2
            ? setUppercaseState
            : promptCount === 3
            ? setNumericState
            : promptCount === 4
            ? setSpecialCharsState
            : "nada"
        }
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default App;
