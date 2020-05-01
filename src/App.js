import React, { useState } from "react";
import "./App.css";
import { Container, Button } from "react-bootstrap";
import PromptModal from "./Components/PromptModal";
const App = () => {
  const [state, setState] = useState({
    length: 0,
    generatedPw:
      "No password generated yet... click button to generate password",
    specialCharacters: false,
    upperCase: false,
    lowerCase: false,
    numbers: false,
  });

  // state for modal
  const [modalShow, setModalShow] = useState(false);

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
        <h2 style={{ fontWeight: "bold", textShadow: "2px 3px 5px gray" }}>
          Password Generator
        </h2>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "25px",
            textShadow: "2px 4px 5px gray",
            borderRadius: "4px",
          }}
        >
          <p style={{ color: "whitesmoke" }}>{state.generatedPw}</p>
        </div>
        <Button
          style={{ position: "absolute", right: "5px", bottom: "5px" }}
          variant="info"
          onClick={() => {
            setModalShow(true);
            setState({
              ...state,
              generatedPw:
                "No password generated yet... click button to generate password",
              specialCharacters: false,
              length: 0,
              lowerCase: false,
              numbers: false,
            });
          }}
        >
          Generate Password
        </Button>
      </div>
      <PromptModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        promptstate={state}
        setpromptstate={setState}
      />
    </Container>
  );
};

export default App;
