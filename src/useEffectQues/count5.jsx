import React, { useEffect, useState } from "react";
import { useRef } from "react";

export const Count5 = () => {
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);
    const LIMIT =5;

  useEffect(() => {

    intervalRef.current =  setInterval(() => {
      console.log("Running interval");

    
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);


  useEffect(() =>{
     console.log(`Updating : ${count}`);

     if(count >= LIMIT){
        console.log("Stop inerval ")
        clearInterval(intervalRef.current)
     }


  }, [count])

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
    </div>
  );
};
