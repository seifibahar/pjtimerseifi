import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import PresentDay from "./PresentDay";
import PresentTime from "./PresentTime";
import './style.css';
import TimerMain from "./TimerMain";

let Intervall;
const PresentDayTimeTimer = () => {

  // state

  const [hour, sethour] = useState(0);
  const [minute, setminute] = useState(0);
  const [second, setsecond] = useState(0);
  const [startflag, setstartflag] = useState(true);
  const [presenthour, setpresenthour] = useState(0);
  const [presentminute, setpresentminute] = useState(0);
  const [presentsecond, setpresentsecond] = useState(0);
  const [presentyear, setpresentyear] = useState(0);
  const [presentmonth, setpresentmonth] = useState(0);
  const [presentday, setpresentday] = useState(0);
  // state


  // function $ useeffect

  useEffect(() => {
    if (second == 60) {
      setsecond(0);
      setminute(a => a + 1);
    }
    if (minute == 60) {
      setminute(0);
      sethour(a => a + 1);
    }

  }, [second, minute, hour, startflag]);

  const starttimer = () => {
    if (startflag) {
      Intervall = setInterval(() => {
        setsecond(a => a + 1);
      }, 1000);
    }

    setstartflag(false);
  };
  const stoptimer = () => {
    clearInterval(Intervall);
    setstartflag(true);
  };

  const resettimer = () => {

    sethour(0);
    setminute(0);
    setsecond(0);
    setstartflag(true);
    clearInterval(Intervall);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setpresenthour(new Date().getHours());
      setpresentminute(new Date().getMinutes());
      setpresentsecond(new Date().getSeconds());
      setpresentyear(new Date().getFullYear());
      setpresentmonth(new Date().getMonth());
      setpresentday(new Date().getDay());

    }, 1000);
    return () => clearInterval(interval);
  }, [presentday, presentmonth, presentyear, presenthour, presentminute, presentsecond])
  // function $ useeffect
  return (
    <div className="presentdaytimetimer">
      <TimerMain
        hour={`${hour > 9 ? hour : "0" + hour}`}
        minute={`${minute > 9 ? minute : "0" + minute}`}
        second={`${second > 9 ? second : "0" + second}`}
        starttimer={starttimer}
        resettimer={resettimer}
        stoptimer={stoptimer}
        startflag={startflag} />

      <div className="present-date-time">

        <PresentTime
          presenthour={`${presenthour > 9 ? presenthour : "0" + presenthour}`}
          presentminute={`${presentminute > 9 ? presentminute : "0" + presentminute}`}
          presentsecond={`${presentsecond > 9 ? presentsecond : "0" + presentsecond}`} />
        <PresentDay
          presentday={`${presentday > 9 ? presentday : "0" + presentday + "    "}`}
          presentmonth={`${presentmonth > 9 ? presentmonth : "0" + presentmonth + "   "}`}
          presentyear={`${presentyear > 9 ? presentyear : "0" + presentyear + "   "}`}
        />
      </div>

    </div>
  )
}







export default PresentDayTimeTimer;