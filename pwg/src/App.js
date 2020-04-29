import React, { useState } from "react";
import "./App.css";
import Prompt from "./Components/Prompt";
import { Container } from "react-bootstrap";

function App() {
  // truth/falsy states
  const [lowerCase, setLowercase] = useState(false);
  const [upperCase, setUppercase] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  // numeric states
  const [pwLength, setPwLength] = useState(0);
  const [promptCount, setPromptCount] = useState(0);

  // string states
  const [generatedPW, setGenPw] = useState(
    "No password generated yet... click button to generate password"
  );

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
          <p style={{ color: "whitesmoke" }}>{generatedPW}</p>
        </div>
      </div>
    </Container>
  );
}

export default App;
