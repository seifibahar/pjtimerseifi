import React from "react";
import { ReactDOM } from "react";






const TimerMain = (props) => {

  return (
    <h1 className="timer">
      <div className="main-timer">
        {props.hour}:{props.minute}:{props.second}
      </div>

      <div className="buttonbox">
        <button className="startbtn" onClick={props.starttimer}>start</button>
        <button className="stopbtn" onClick={props.stoptimer}>stop</button>
        <button className="resetbtn" onClick={props.resettimer}>reset</button>

      </div>
    </h1>
  )





}

export default TimerMain;