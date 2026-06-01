import React, { useMemo, useState } from "react";

export const ReverseText = () => {
  const [text, setText] = useState("");

  const reversedText = useMemo(() => {
    let str = "";

    // By using inbuilt method 

    //  return text.split("").reverse().join("").toLowerCase()

    //Without using inbuilt method 

    
    for (let i = text.length - 1; i >= 0; i--) {
      str += text[i];
    }
    return str;
  }, [text]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Reverse Text</h2>
      <p>Original Text: {text}</p>
      <p>Reversed Text:{reversedText}</p>

      <input
        type="text"
        placeholder="Enter text..."
        value={text}
        onChange={handleInput}
      />
    </div>
  );
};
