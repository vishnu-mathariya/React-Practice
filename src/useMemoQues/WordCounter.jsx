import React, { useMemo, useState } from "react";

export const WordCounter = () => {
  const [text, setText] = useState("");

  const wordCount = useMemo(() => {


    if(text.trim() === ""){
      return 0
    }
    return text.trim().split(/\s+/).length;
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Word Counter</h2>
      <p>Text:{text}</p>

      <p>Word Counter: {wordCount}</p>

      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleInput}
      />
    </div>
  );
};
