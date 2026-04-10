import React, { useState } from "react";

export const ChildComp = ({ Rname }) => {
  const [sendName, setSendName] = useState("");

  const handleSendName = (e) => {
    setSendName(e.target.value);
  };

  const handleSendBtn = () => {
    Rname(sendName);
    setSendName("");
  };
  return (
    <div>
      <input type="text" value={sendName} onChange={handleSendName} />
      <button onClick={handleSendBtn}> Send Name </button>
    </div>
  );
};
