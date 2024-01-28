import React, { useState } from "react";

const TextareaBase64Encoder = () => {
  const [text, setText] = useState("");
  const [base64Encoded, setBase64Encoded] = useState("");

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    const encoded = btoa(newText);
    setBase64Encoded(encoded);
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <textarea
          className="form-control"
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextareaChange}
        />
      </div>

      <div className="col-lg-6">
        <textarea className="form-control" value={base64Encoded} disabled />
      </div>
    </div>
  );
};

export default TextareaBase64Encoder;
