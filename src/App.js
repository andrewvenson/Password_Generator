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

  const [back, setBackground] = useState({
    background: "dark",
  });

  const backgroundStyles = {
    background:
      back["background"] === "groovy"
        ? "linear-gradient(to right, #de6161, #2657eb)"
        : back["background"] === "dark"
        ? "linear-gradient(315deg, #000000 0%, #414141 74%)"
        : back["background"] === "light"
        ? "linear-gradient(to right, #ece9e6, #ffffff)"
        : "white",
    height: "100%",
  };

  // state for modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <div style={backgroundStyles}>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="dark"
          style={{ margin: "5px" }}
          onClick={() => setBackground({ ...back, background: "dark" })}
        >
          Dark
        </Button>
        <Button
          variant="light"
          style={{ margin: "5px" }}
          onClick={() => setBackground({ ...back, background: "light" })}
        >
          Light
        </Button>
        <Button
          variant="danger"
          style={{
            margin: "5px",
            color: "#2657EB",
            backgroundColor: "#DE6161",
            borderColor: "#DE6161",
          }}
          onClick={() => setBackground({ ...back, background: "groovy" })}
        >
          Groovy
        </Button>
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "150px",
        }}
      >
        <div
          className="pgdiv"
          style={{
            height: "310px",
            // border: "1px solid #f2f2f2",
            padding: "10px",
            borderRadius: "10px",
            boxShadow:
              back["background"] === "dark"
                ? "4px 8px 16px black"
                : "4px 8px 16px lightgray",
            position: "relative",
            backgroundColor:
              back["background"] === "light"
                ? "whitesmoke"
                : back["background"] === "dark"
                ? "#1f1f1f"
                : "whitesmoke",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              textShadow:
                back["background"] === "dark"
                  ? "2px 3px 5px black"
                  : "2px 3px 5px gray",
              color:
                back["background"] === "groovy"
                  ? "#DE6161"
                  : back["background"] === "dark"
                  ? "#424242"
                  : "lightgray",
            }}
            className="pwtitle"
          >
            Password Generator
          </h2>
          <hr style={{ color: "gray" }} />
          <div
            style={{
              backgroundColor:
                back["background"] === "dark"
                  ? "#454545"
                  : back["background"] === "groovy"
                  ? "#2657eb"
                  : "lightgray",
              padding: "15px",
              textShadow: "2px 4px 5px gray",
              borderRadius: "4px",
              wordWrap: "break-word",
              height: "140px",
            }}
          >
            <h5
              className="generatedText"
              style={{
                color: "whitesmoke",
              }}
            >
              {state.generatedPw}
            </h5>
          </div>
          <hr style={{ color: "gray" }} />

          <Button
            style={{
              position: "absolute",
              right: "10px",
              bottom: "5px",
              backgroundColor:
                back["background"] === "dark"
                  ? "#008b10"
                  : back["background"] === "light"
                  ? "black"
                  : "#de6161",
              borderColor:
                back["background"] === "dark"
                  ? "#008b10"
                  : back["background"] === "light"
                  ? "black"
                  : "#de6161",
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
              Copy{" "}
              <img src={Clipboard} style={{ height: "20px" }} alt="clipboard" />
            </Button>
          </CopyToClipboard>

          {copyclip["copied"] ? (
            <span
              className="copiedText"
              style={{
                color:
                  back["background"] === "dark"
                    ? "#008b10"
                    : back["background"] === "light"
                    ? "black"
                    : "#de6161",
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
          back={back}
        />
      </Container>
    </div>
  );
};

export default App;
