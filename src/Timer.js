/* Tutorial that we partly followed: https://sebhastian.com/setinterval-react/ */

import { useState } from "react";
import "./styles.css";

export default function StudyTimer() {
  const [sessionlength, setSessionLength] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  });

  const [SpanId, setSpanId] = useState();

  const changeTimer = () => {
    setSessionLength((past) => {
      let latestTime = { ...past };

      /* we add to seconds if it has not been a minute, if it has been a minute, then
      a minute is added in 'else' and seconds do not need to be added */
      if (latestTime.seconds < 59) latestTime.seconds += 1;
      else {
        latestTime.minutes += 1;
        latestTime.seconds = 0;
      }

      /* similar to seconds, if minutes reach 60, minutes should reset,
      and hours should be added to by one */
      if (latestTime.minutes === 60) {
        latestTime.minutes = 0;
        latestTime.hours += 1;
      }
      return latestTime; /* constantly update timer */
    });
  };

  /* setInterval is a function that produces for us
  an ID for a timer. If an ID already exists, then 
  start/stop would use ID from setInterval */

  /* setInterval and clearInterval example that we
  followed: https://www.w3schools.com/jsref/met_win_clearinterval.asp#:~:text=The%20clearInterval()%20method%20clears,with%20the%20setInterval()%20method. */
  const StartOrStop = () => {
    if (!SpanId) {
      let id = setInterval(changeTimer, 1000);
      setSpanId(id);
    } else {
      clearInterval(SpanId); /* here, we stop execution similar to */
      setSpanId(""); /* here, ID is removed so a new one may be given */
    }
  };

  /* here, we make sure to change all values to zero */
  /* we also use clearInterval because we do not want the timer
  to continue running after the user uses the reset button */
  /* reset button acts as a stop button also */
  const reset = () => {
    clearInterval(SpanId);
    setSessionLength({
      seconds: 0,
      minutes: 0,
      hours: 0
    });
  };

  /* we check that each hours, minutes, and seconds are two digits */
  /* with < 10 ? 0 : "" we are able to prevent more than one number 
changing at the same time, for example, tenth column is changed 
along with  single digit in single seconds. Also, "" because we 
need no text to be show every 10 units */
  return (
    <div className="Stopwatch">
      <h2 className="TimerTitle">Study Session Timer</h2>
      <h2 className="TimerCurrent">{`${sessionlength.hours < 10 ? 0 : ""}${
        sessionlength.hours
      } : ${sessionlength.minutes < 10 ? 0 : ""}${sessionlength.minutes} : ${
        sessionlength.seconds < 10 ? 0 : ""
      }${sessionlength.seconds}`}</h2>
      <button className="TimerButton" onClick={StartOrStop}>
        Start/Stop
      </button>
      <button className="TimerButtonTwo" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
