import React, { useState } from "react";

const TextareaBase64Decoder = () => {
  const [base64Text, setBase64Text] = useState("");
  const [decodedText, setDecodedText] = useState("");

  const handleTextareaChange = (event) => {
    const newBase64Text = event.target.value;
    setBase64Text(newBase64Text);
    try {
      const decoded = atob(newBase64Text);
      setDecodedText(decoded);
    } catch (error) {
      setDecodedText("Invalid Base64 input");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        base64
        <textarea
          className="form-control"
          placeholder="Type your Base64-encoded text here..."
          value={base64Text}
          onChange={handleTextareaChange}
        />
      </div>

      <div className="col-lg-6">
        Plain
        <textarea className="form-control" value={decodedText} disabled />
      </div>
    </div>
  );
};

export default TextareaBase64Decoder;
