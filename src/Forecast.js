




import React, { useState } from "react";
import ContentToggle from "./ContentToggle";
import "./styles.css";

export default function App() {
  /* const for searching while  choosing
  to view forecast or not viewing */
  const [view, setview] = useState(false);

  return (
    /* grid for dividing */
    <div style={{ display: "grid", justifyItems: "center" }}>
      <div
        className="ft-toggle"
        style={{
          display: "grid",
          gridGap: 8,
          width: "100%",
          maxWidth: 420,
          maxHeight: 700
        }}
      >
        <button
          className="forecast-button"
          style={{ padding: 4 }}
          onClick={() => setview((view) => !view)}
        >
          View Weekday Forecast with Search
        </button>
        {/* open is used instead of 'lazy open' because we
       want forecast to be visible (viewable) for long */}
        <ContentToggle open={view}>
          <div
            style={{
              padding: 16,
              backgroundColor: "white",
              border: "2px solid lightgrey",
              borderRadius: 20
            }}
          >
            {/* main file requiring change: Forecast.js */}
            {/* table using classes for overwriting text (SearchAPI.js) */}
            {/* thead (table header) would need to be hidden/shown depending on 
            if hourly or daily is being shown, that is, a different header or 
            table data each time*/}
            <table className="FTable" id="FTableID">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Forecast</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Monday</b>
                  </td>
                  <td id="day1">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Tuesday</b>
                  </td>
                  <td id="day2">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Wednesday</b>
                  </td>
                  <td id="day3">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Thursday</b>
                  </td>
                  <td id="day4">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Friday</b>
                  </td>
                  <td id="day5">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Saturday</b>
                  </td>
                  <td id="day6">-</td>
                </tr>
                <tr>
                  <td>
                    <b>Sunday</b>
                  </td>
                  <td id="day7">-</td>
                </tr>
                <tr>
                  {/* example of how table data that could be changed to include more buttons*/}
                  <td>
                <button
          className="scroll-to-view-all-data-button"
          style={{ padding: 4 }}
          onClick={() => setview((view) => !view)}
        >
          {/* left/right icon instead of text */}
        </button></td>
        <td><button
          className="main-hourly-daily-switch-button"
          style={{ padding: 4 }}
          onClick={() => setview((view) => !view)}
        >
          {/* view '____' text on button depending on if currently on daily/hourly */}

        </button></td><td>
                <button
          className="scroll-to-view-all-data-button"
          style={{ padding: 4 }}
          onClick={() => setview((view) => !view)}
        >
          {/* left/right icon instead of text */}
        </button></td></tr>
              </tbody>
            </table>
          </div>
        </ContentToggle>
      </div>
    </div>
  );
}






