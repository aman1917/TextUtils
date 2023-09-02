import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };
  // handleClearClick
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control my-2"
            placeholder="Leave a comment here"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert To Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}
          >
            Convert To Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraClick}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          word, {text.length} character
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minute to Read Contain
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
