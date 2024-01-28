import React, { useState } from "react";

const TextToLowercaseConverter = () => {
  const [text, setText] = useState("");

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setText(newText.toLowerCase());
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        paste
        <textarea
          className="form-control"
          placeholder="Type your text here..."
          onChange={handleTextareaChange}
        />
      </div>

      <div className="col-lg-6">
        breaks
        <textarea className="form-control" value={text} disabled />
      </div>
    </div>
  );
};

export default TextToLowercaseConverter;
