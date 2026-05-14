import React from "react";

const DateCalculation = () => {
  

  const handleType = (type) => {
    const date = new Date();

    if (type === "today") {
      console.log(
        "Today : ",

        date.toDateString(),
      );
    } else if (type === "yesterday") {
      date.setDate(date.getDate() - 1);

      console.log(
        "Yesterday",

        date.toDateString(),
      );
    } else if (type === "nextMonth") {
      date.setMonth(date.getMonth);
      console.log(
        "next month",
        date.toDateString("default", { month: "long" }),
      );
    } else if (type === "nextYear") {
      date.setFullYear(date.getFullYear() + 1);

      console.log("Next year :", date.getFullYear());
    } 
    else if(type === "time" ){
        date.setHours(date.getHours() + 5);
        console.log("Time + 5 hr:",
        date.toLocaleTimeString())
        
    }
  };

  return (
    <div>

        <h2>Date Calculation</h2>
      <button onClick={() => handleType("today")}>Today</button>
      <button onClick={() => handleType("yesterday")}> Yesterday</button>
      <button onClick={() => handleType("nextMonth")}>Next Month</button>
      <button onClick={() => handleType("nextYear")}>Next year</button>
      <button onClick={() => handleType("time")}> Time + 5hr</button>
    </div>
  );
};

export default DateCalculation;
