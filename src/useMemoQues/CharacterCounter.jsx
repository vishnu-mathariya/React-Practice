import React, { useMemo, useState } from "react";

export const CharacterCounter = () => {
  const [text, setText] = useState("");

  const charCount = useMemo(() => {
    return text.length;
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <p>Text: {text}</p>

      <p>Character Count: {charCount}</p>

      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleInput}
      />
    </div>
  );
};
