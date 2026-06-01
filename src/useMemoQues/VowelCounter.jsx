import React, { useMemo, useState } from "react";

export const VowelCounter = () => {
  const [text, setText] = useState("");

  const countVowels = useMemo(() => {
    let vowels = "aeiou";
    let count = 0;
    let lowerText = text.toLowerCase()
    for (let i = 0; i < lowerText.length; i++) {
      if (vowels.includes(lowerText[i])) {
        count++;
      }
    }
    return count;
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Count Vowels</h2>
      <p>Text : {text}</p>

      <p>Vowel Count:{countVowels}</p>

      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleInput}
      />
    </div>
  );
};
