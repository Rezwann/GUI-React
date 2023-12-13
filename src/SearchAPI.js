import React, { useState } from "react";
import axios from "axios";
import "/src/styles.css";

export default function Search() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    /* returning full date as part of search result/outcome */

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  // Used for when city not found
  const [errorMessage, setErrorMessage] = useState("");

  function showTemperature(outcome) {
    /* choosing an icon of 4x size depending on weather */
    let icon = `http://openweathermap.org/img/wn/${outcome.data.weather[0].icon}@4x.png`;

    setWeatherData(
      <div className="Results">
        {" "}
        {/* using class to present as part of result */}
        <div className="weathercon">
          <img src={icon} alt={outcome.data.weather[0].description} />
        </div>
        <div className="resultdate">{dateBuilder(new Date())}</div>
        <section className="location">
          <h1>{city}</h1>
        </section>
        <section className="tempdegree">
          {Math.round(outcome.data.main.temp)}°C
        </section>
        <div className="resultdesc">{outcome.data.weather[0].description} </div>
        <div className="result-info">
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })}{" "}
          {outcome.data.main.humidity}% {Math.round(outcome.data.wind.speed)}
          km/h {outcome.data.clouds.all}‏‏‎%
        </div>{" "}
        {/* obtiaining weather details from outcome or file produced as a result of city entered */}
        <div className="box">
          <div className="wave -one">
            <div className="wave -two">
              <div className="wave -three"></div>
            </div>
          </div>
        </div>
      </div>
    );

    /* re-using already entered city for a full forecast */
    getWeekForecast(city);
  }


  /*SearchAPI.js file will require change so that any 'main-hourly-daily-switch-button' writes to a specific html element*/
  /* Depending on what is currently being viewed, either a getWeekForecast(cityName) function should be called or getHourForCurrentDay*/
  /* A getHourlyForCurrentDay*/

  /* function getHourlyForecast(cityName){
    - API details or re-use
    - Use same API and JSON file or another API
    - loop through hours which can be scrolled through 
  }*/
  function getWeekForecast(cityName) {
    let apiKey = "1bb947bf82505065f03a7fe8337f214f";
    let APIURLforWeekForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    fetch(APIURLforWeekForecast)
      .then((outcome) => outcome.json())
      .then((data) =>
        showWeekForecast(data)
      ); /* passing json file outcome to 'show' function */

    function showWeekForecast(data) {
      for (let i = 0; i < data.list.length; i = i + 8) {
        /* searching through json */
        if (document.getElementById("day1")) {
          /* writing obtained day forecasts for forecast table  */
          document.getElementById("day1").innerHTML =
            (data.list[0].main.temp_max - 273).toFixed(0) + "°C";
        }
        if (document.getElementById("day2")) {
          document.getElementById("day2").innerHTML =
            (data.list[8].main.temp_max - 273).toFixed(0) + "°C";
        }
        if (document.getElementById("day3")) {
          document.getElementById("day3").innerHTML =
            (data.list[16].main.temp_max - 273).toFixed(0) + "°C";
        }

        if (document.getElementById("day4")) {
          document.getElementById("day4").innerHTML =
            (data.list[24].main.temp_max - 273).toFixed(0) + "°C";
        }
        if (document.getElementById("day5")) {
          document.getElementById("day5").innerHTML =
            (data.list[32].main.temp_max - 273).toFixed(0) + "°C";
        }
        if (document.getElementById("day6")) {
          document.getElementById("day6").innerHTML =
            (data.list[34].main.temp_max - 273).toFixed(0) + "°C";
        }
        if (document.getElementById("day7")) {
          document.getElementById("day7").innerHTML =
            (data.list[36].main.temp_max - 273).toFixed(0) + "°C";
        }
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault(); /* this prevents a refresh */
    const apiKey = `1bb947bf82505065f03a7fe8337f214f`;
    let units = `metric`; /* celsius not chosen */
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios
      .get(apiUrl)
      .then(showTemperature) /* axios used to get api url and call function */
      .then((response) => {
        setErrorMessage(""); // No error as default
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error);
      });
    /* here, if a location has been searched for, there is 
    no need to have a guidance message element still being shown */
    let elem = document.getElementById("SearchAlert");
    if (elem !== null) {
      elem.parentNode.removeChild(elem);
    }
  }

  /* setCity const */
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      {/* handleSubmit to show weather results */}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          className="search__input"
          type="search"
          placeholder="search for a location"
          onChange={updateCity} /* changing city const */
        ></input>
        <div className="sub">
          <input className="nostyle" type="submit" value=""></input>
        </div>
        <div id="SearchAlert">
          <p className="searchA">You must search for a location</p>
          <div className="box2">
            <div className="wave -one">
              <div className="wave -two">
                <div className="wave -three"></div>
              </div>
            </div>
          </div>
          <section className="submessage">
            Location weather details will appear here.
          </section>
        </div>
        <div className=""></div>
        <div class="error">
          {errorMessage !== "" && <h3>Oops! Location not found.</h3>}
        </div>
      </form>
      <div>{weatherData}</div> {/* Displaying all weather details */}
      <div className="resultbox"></div> {/* reuslt container with waves */}
    </div>
  );
}
