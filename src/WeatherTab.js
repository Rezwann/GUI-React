/* Good alternative approach to weather
details that we ultimately chose to not include */

/*
import React from "react";

class WeatherTab extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "box" },
      React.createElement("div", { className: "wave -one" }),
      React.createElement("div", { className: "wave -two" }),
      React.createElement("div", { className: "wave -three" }),
      React.createElement(
        "div",
        { className: "weathercon" },
        React.createElement("i", { className: "fas fa-cloud" })
      ),
      React.createElement(
        "div",
        { className: "info" },
        React.createElement("h2", { className: "location" }, "London"),
        React.createElement("h1", { className: "temp" }, "25\u00b0")
      )
    );
  }
}

export class Weather extends React.Component {
  renderWeatherTab(i) {
    return React.createElement(WeatherTab, null);
  }
  render() {
    return this.renderWeatherTab(0);
  }
}
*/
