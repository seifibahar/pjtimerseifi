import React from "react";
import { ReactDOM } from "react";


const PresentDay =(props)=>{
return(
  <div className="presentday">
 <div className="presentday_Number">
                {props.presentday}
                {props.presentmonth}
                {props.presentyear}
            </div>
            <br></br>
            {`${"Year" + "   " + "Month" + "    " + 'Day'}`}

  </div>
 
)
}

export default PresentDay;