import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>{text}</h2>
      <label for="textInput">Enter text</label>
      <br />
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        name="textInput"
      />
    </div>
  );
};

export default TextInput;
