import React, { useState } from "react";

const TextareaCounter = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const countCharacters = () => {
    return text.length;
  };

  const countWords = () => {
    const words = text.split(/\s+/);
    return words.filter((word) => word !== "").length;
  };

  const countLines = () => {
    const lines = text.split("\n");
    return lines.length;
    // return lines.filter((line) => line.trim() !== "").length;
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <textarea
            className="form-control"
            rows={3}
            placeholder="Type your text here..."
            value={text}
            onChange={handleTextareaChange}
          />
        </div>
        <div className="col-lg-6">
          <p className="meta-output">
            Characters: {countCharacters()} Words: {countWords()} Lines:{" "}
            {countLines()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextareaCounter;
