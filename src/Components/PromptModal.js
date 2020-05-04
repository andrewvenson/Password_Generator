import React, { useState, useContext } from "react";
import { MatterContext } from "../MatterContext";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  let context = useContext(MatterContext);

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
    for (var x = 0; x < context[0]["length"]; x++) {
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
    context[1]({
      ...context[0],
      generatedPw: passArray.join(""),
    });
    props.onHide();
  };

  const promptValidation = () => {
    // if both password length AND character type don't meet criteria
    if (
      (context[0]["length"] < 8 ||
        context[0]["length"] > 128 ||
        Number.isNaN(context[0]["length"])) &&
      !context[0]["specialCharacters"] &&
      !context[0]["upperCase"] &&
      !context[0]["lowerCase"] &&
      !context[0]["numbers"]
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
      (context[0]["length"] < 8 ||
        context[0]["length"] > 128 ||
        Number.isNaN(context[0]["length"])) &&
      (context[0]["specialCharacters"] ||
        context[0]["upperCase"] ||
        context[0]["lowerCase"] ||
        context[0]["numbers"])
    ) {
      setValidationState({
        ...validation,
        lengthValidation: "Password length must be between 8-128 characters...",
        characterValidation: "",
      });
    }
    // if password length does meet criteria and character type does NOT meet criteria
    else if (
      (context[0]["length"] >= 8 ||
        context[0]["length"] <= 128 ||
        Number.isNaN(context[0]["length"])) &&
      !context[0]["specialCharacters"] &&
      !context[0]["upperCase"] &&
      !context[0]["lowerCase"] &&
      !context[0]["numbers"]
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
        [context[0]["specialCharacters"], specialCharacters],
        [context[0]["upperCase"], upperCharacters],
        [context[0]["lowerCase"], caseCharacters],
        [context[0]["numbers"], numbers],
      ]);
    }
  };

  const buttonColor = () => {
    return context[0]["length"] >= 8 &&
      context[0]["length"] <= 128 &&
      (context[0]["specialCharacters"] ||
        context[0]["upperCase"] ||
        context[0]["lowerCase"] ||
        context[0]["numbers"])
      ? {
          backgroundColor:
            context[2]["background"] === "dark"
              ? "#008b10"
              : context[2]["background"] === "light"
              ? "black"
              : "#de6161",
          borderColor:
            context[2]["background"] === "dark"
              ? "#008b10"
              : context[2]["background"] === "light"
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
    return context[2]["background"] === "dark"
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
              context[2]["background"] === "dark"
                ? "2px 3px 4px black"
                : "2px 3px 4px lightgray",
            color:
              context[2]["background"] === "dark"
                ? "#008b10"
                : context[2]["background"] === "light"
                ? "black"
                : "#DE6161",
          }}
        >
          Password Generator
        </h4>
      </Modal.Header>
      <Modal.Body style={backgroundColor()}>
        <Prompt
          validation={validation}
          setValidationState={setValidationState}
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
