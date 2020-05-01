import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PromptModal from "./Components/PromptModal";
import Clipboard from "./images/clipboard.png";
import "./App.css";

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

  const [copyclip, setCopyClip] = useState({
    value: "",
    copied: false,
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
        className="pgdiv"
        style={{
          height: "310px",
          border: "1px solid #f2f2f2",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "4px 8px 16px lightgray",
          position: "relative",
          backgroundColor: "whitesmoke",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            textShadow: "2px 3px 5px gray",
            color: "#2657eb",
          }}
          className="pwtitle"
        >
          Password Generator
        </h2>
        <hr style={{ color: "gray" }} />
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "15px",
            textShadow: "2px 4px 5px gray",
            borderRadius: "4px",
            wordWrap: "break-word",
            height: "140px",
          }}
        >
          <h5 className="generatedText" style={{ color: "whitesmoke" }}>
            {state.generatedPw}
          </h5>
        </div>
        <hr style={{ color: "gray" }} />

        <Button
          style={{
            position: "absolute",
            right: "10px",
            bottom: "5px",
            backgroundColor: "#de6161",
            borderColor: "#de6161",
            boxShadow: "2px 3px 8px lightgray",
          }}
          className="genpw"
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
            setCopyClip({ ...copyclip, copied: false });
          }}
        >
          Generate Password
        </Button>

        <CopyToClipboard
          text={state["generatedPw"]}
          onCopy={() => {
            setCopyClip({ ...copyclip, copied: true });
          }}
        >
          <Button
            className="genpw"
            style={{ position: "absolute", left: "10px", bottom: "5px" }}
            variant="secondary"
          >
            Copy <img src={Clipboard} style={{ height: "20px" }} />
          </Button>
        </CopyToClipboard>

        {copyclip["copied"] ? (
          <span
            className="copiedText"
            style={{
              color: "#de6161",
              position: "absolute",
              left: "10px",
              bottom: "45px",
            }}
          >
            Copied.
          </span>
        ) : null}
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
