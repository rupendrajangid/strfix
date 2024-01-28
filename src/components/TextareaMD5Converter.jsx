import React, { useState } from "react";
import { MD5 } from "crypto-js";

const TextareaMD5Converter = () => {
  const [text, setText] = useState("");
  const [md5Hash, setMD5Hash] = useState("");

  const handleTextareaChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    const hash = MD5(newText).toString();
    setMD5Hash(hash);
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
        <textarea className="form-control" value={md5Hash} disabled />
      </div>
    </div>
  );
};

export default TextareaMD5Converter;
