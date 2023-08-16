import React from "react";
import { ReactDOM } from "react";

const PresentTime =(props)=>{

  return(
  <div className="presenttime">
  {props.presenthour}:{props.presentminute}:{props.presentsecond}
    </div>
  
  )
}

export  default PresentTime;