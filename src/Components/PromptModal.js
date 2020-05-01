import React, { useState } from "react";
import Prompt from "./Prompt";
import { Modal, Button } from "react-bootstrap";

const PromptModal = (props) => {
  const [validation, setValidationState] = useState({
    lengthValidation: "",
    characterValidation: "",
  });

  let pwLength = props.promptstate["length"];

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

      var numbers = [];
      var passArray = [];

      // assign all numbers to numbers array
      for (var numba = 0; numba < 10; numba++) {
        numbers.push(numba.toString());
      }

      // iterate through password length value and append new values to pass Array
      for (var iter = 0; iter <= pwLength; iter++) {
        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["upperCase"] &&
          props.promptstate["numbers"] &&
          props.promptstate["specialCharacters"]
        ) {
          let newArray = [
            ...caseCharacters,
            ...upperCharacters,
            ...specialCharacters,
            ...numbers,
          ];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["upperCase"] &&
          props.promptstate["specialCharacters"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [
            ...caseCharacters,
            ...upperCharacters,
            ...specialCharacters,
          ];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["upperCase"] &&
          props.promptstate["numbers"] &&
          !props.promptstate["specialCharacters"]
        ) {
          let newArray = [...caseCharacters, ...upperCharacters, ...numbers];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["upperCase"] &&
          props.promptstate["numbers"] &&
          props.promptstate["specialCharacters"] &&
          !props.promptstate["lowerCase"]
        ) {
          let newArray = [...numbers, ...upperCharacters, ...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["numbers"] &&
          props.promptstate["specialCharacters"] &&
          !props.promptstate["upperCase"]
        ) {
          let newArray = [...caseCharacters, ...numbers, ...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["numbers"] &&
          !props.promptstate["specialCharacters"] &&
          !props.promptstate["upperCase"]
        ) {
          let newArray = [...caseCharacters, ...numbers];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["numbers"] &&
          props.promptstate["specialCharacters"] &&
          !props.promptstate["lowerCase"] &&
          !props.promptstate["upperCase"]
        ) {
          let newArray = [...numbers, ...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["numbers"] &&
          props.promptstate["upperCase"] &&
          !props.promptstate["lowerCase"] &&
          !props.promptstate["specialCharacters"]
        ) {
          let newArray = [...upperCharacters, ...numbers];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["specialCharacters"] &&
          !props.promptstate["numbers"] &&
          !props.promptstate["upperCase"]
        ) {
          let newArray = [...caseCharacters, ...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["lowerCase"] &&
          props.promptstate["upperCase"] &&
          !props.promptstate["specialCharacters"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [...upperCharacters, ...caseCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["specialCharacters"] &&
          props.promptstate["upperCase"] &&
          !props.promptstate["lowerCase"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [...upperCharacters, ...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          props.promptstate["specialCharacters"] &&
          !props.promptstate["upperCase"] &&
          !props.promptstate["lowerCase"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [...specialCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          !props.promptstate["specialCharacters"] &&
          props.promptstate["upperCase"] &&
          !props.promptstate["lowerCase"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [...upperCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          !props.promptstate["specialCharacters"] &&
          !props.promptstate["upperCase"] &&
          props.promptstate["lowerCase"] &&
          !props.promptstate["numbers"]
        ) {
          let newArray = [...caseCharacters];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }

        if (
          !props.promptstate["specialCharacters"] &&
          !props.promptstate["upperCase"] &&
          !props.promptstate["lowerCase"] &&
          props.promptstate["numbers"]
        ) {
          let newArray = [...numbers];
          passArray.push(newArray[Math.floor(Math.random() * newArray.length)]);
        }
      }

      // sets generatedPw state to new random generated password
      props.setpromptstate({
        ...props.promptstate,
        generatedPw: passArray.join(""),
      });
      props.onHide();
    }
  };

  const buttonColor = () => {
    return props.promptstate.length >= 8 &&
      props.promptstate.length <= 128 &&
      (props.promptstate["specialCharacters"] ||
        props.promptstate["upperCase"] ||
        props.promptstate["lowerCase"] ||
        props.promptstate["numbers"])
      ? { backgroundColor: "#17A2B8", borderColor: "#17A2B8" }
      : { backgroundColor: "lightgray", borderColor: "lightgray" };
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h4 style={{ textShadow: "2px 3px 4px lightgray" }}>
          Password Generator
        </h4>
      </Modal.Header>
      <Modal.Body>
        <Prompt
          promptstate={props.promptstate}
          setpromptstate={props.setpromptstate}
          validation={validation}
          setValidationState={setValidationState}
        />
      </Modal.Body>
      <Modal.Footer>
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
