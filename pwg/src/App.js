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
  const [generatedPW, setGenPw] = useState("");

  return <div className="App"></div>;
}

export default App;
