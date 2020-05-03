import React, { useState } from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  const [validation, setValidationState] = useState({
    lengthValidation: "",
    characterValidation: "",
  });

  var numbers = [];
  var passArray = [];
  const caseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const specialCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "/",
    ":",
    ";",
    "''",
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
  ];

  // assign all numbers to numbers array
  for (var numba = 0; numba < 10; numba++) {
    numbers.push(numba.toString());
  }

  // Generate password function
  const generatePass = (criteria) => {
    // loop through length of password
    for (var x = 0; x < props.promptstate["length"]; x++) {
      // set new array to hold new random characters on each iteration
      let newArray = [];

      // loop through given criteria paramater array
      for (var counter in criteria) {
        // if the criteria is true then push the spreaded array to new array
        criteria[counter][0] && newArray.push(...criteria[counter][1]);
      }

      // selected one random value from new array and then push to pass Array
      passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
    }

    // sets generatedPw state to new random generated password
    props.setpromptstate({
      ...props.promptstate,
      generatedPw: passArray.join(""),
    });
    props.onHide();
  };

  const promptValidation = () => {
    // if both password length AND character type don't meet criteria
    if (
      (props.promptstate["length"] < 8 ||
        props.promptstate["length"] > 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      setValidationState({
        ...validation,
        lengthValidation: "Password length must be between 8-128 characters...",
        characterValidation:
          "At least one character type should be selected...",
      });
    }
    // if password length does NOT meet criteria and character type does meet criteria
    else if (
      (props.promptstate["length"] < 8 ||
        props.promptstate["length"] > 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      (props.promptstate["specialCharacters"] ||
        props.promptstate["upperCase"] ||
        props.promptstate["lowerCase"] ||
        props.promptstate["numbers"])
    ) {
      setValidationState({
        ...validation,
        lengthValidation: "Password length must be between 8-128 characters...",
        characterValidation: "",
      });
    }
    // if password length does meet criteria and character type does NOT meet criteria
    else if (
      (props.promptstate["length"] >= 8 ||
        props.promptstate["length"] <= 128 ||
        Number.isNaN(props.promptstate["length"])) &&
      !props.promptstate["specialCharacters"] &&
      !props.promptstate["upperCase"] &&
      !props.promptstate["lowerCase"] &&
      !props.promptstate["numbers"]
    ) {
      setValidationState({
        ...validation,
        lengthValidation: "",
        characterValidation:
          "At least one character type should be selected...",
      });
    }
    // If both password length AND character type meet criteria
    else {
      setValidationState({
        ...validation,
        lengthValidation: "",
        characterValidation: "",
      });

      // Call Generate pass function | to generate new password | pass props values and corresponding criteria array
      generatePass([
        [props.promptstate["specialCharacters"], specialCharacters],
        [props.promptstate["upperCase"], upperCharacters],
        [props.promptstate["lowerCase"], caseCharacters],
        [props.promptstate["numbers"], numbers],
      ]);
    }
  };

  const buttonColor = () => {
    return props.promptstate.length >= 8 &&
      props.promptstate.length <= 128 &&
      (props.promptstate["specialCharacters"] ||
        props.promptstate["upperCase"] ||
        props.promptstate["lowerCase"] ||
        props.promptstate["numbers"])
      ? {
          backgroundColor:
            props.back["background"] === "dark"
              ? "#008b10"
              : props.back["background"] === "light"
              ? "black"
              : "#de6161",
          borderColor:
            props.back["background"] === "dark"
              ? "#008b10"
              : props.back["background"] === "light"
              ? "black"
              : "#de6161",
        }
      : {
          backgroundColor: "#ECECEC",
          borderColor: "#ECECEC",
          color: "lightgray",
        };
  };

  const backgroundColor = () => {
    return props.back["background"] === "dark"
      ? {
          backgroundColor: "#1F1F1F",
          borderBottom: "1px solid #1a1a1a",
          borderTop: "1px solid #1a1a1a",
          borderRadius: "0px",
        }
      : { backgroundColor: "whitesmoke", borderRadius: "0px" };
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={backgroundColor()} closeButton>
        <h4
          style={{
            textShadow:
              props.back["background"] === "dark"
                ? "2px 3px 4px black"
                : "2px 3px 4px lightgray",
            color:
              props.back["background"] === "dark"
                ? "#008b10"
                : props.back["background"] === "light"
                ? "black"
                : "#DE6161",
          }}
        >
          Password Generator
        </h4>
      </Modal.Header>
      <Modal.Body style={backgroundColor()}>
        <Prompt
          promptstate={props.promptstate}
          setpromptstate={props.setpromptstate}
          validation={validation}
          setValidationState={setValidationState}
          back={props.back}
        />
      </Modal.Body>
      <Modal.Footer style={backgroundColor()}>
        <Button
          style={buttonColor()}
          variant="info"
          // call validation on generate click each time
          onClick={() => {
            promptValidation();
          }}
        >
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PromptModal;
