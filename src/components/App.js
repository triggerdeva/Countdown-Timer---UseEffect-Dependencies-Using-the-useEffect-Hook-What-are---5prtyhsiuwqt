import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [timeCount, setTimeCount]=useState(0);

  useEffect(() => {
    let timerId;

    if (timeCount > 0) {
      timerId = setInterval(() => {
        setTimeCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [timeCount]);
  const handelKeyDown=(e) =>{
    if (e.key === "Enter") {
      const inputTime = Math.floor(e.target.value);
      setTimeCount(inputTime > 0 ? inputTime : 0);
      e.target.value = "";
    }
    
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handelKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeCount}</div>
    </div>
  )
}


export default App;
