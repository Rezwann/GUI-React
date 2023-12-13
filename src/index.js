/* Following ReactJS Official Website: https://reactjs.org/tutorial/tutorial.html */
import "/src/styles.css";
import React from "react";
import ReactDOM from "react-dom";
import Reload from "/src/ReloadApp";
import SideBar from "./sidebar";
import Forecast from "/src/Forecast";
import SearchAPI from "/src/SearchAPI";
import Quotes from "/src/MotivationalQuotes";
import OutfitURL from "/src/OutfitURL";
import OutfitSelect from "/src/OutfitSelector";
import StudentSessions from "/src/ScheduleList/StudentSchedule";
import Timer from "/src/Timer.js";

/* Navigation for Sidebar */
class Nav extends React.Component {
  render() {
    return (
      <div id="App">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap"></div>
      </div>
    );
  }
}

/* Horizontal toggle and table for forecast*/
class ForecastToggle extends React.Component {
  render() {
    return (
      <div className="forecast">
        <div className="forecast-toggle">
          <Forecast />
        </div>
      </div>
    );
  }
}

/* Key data entry, search bar for location */
class Entry extends React.Component {
  render() {
    return (
      <div className="entr">
        <div>
          <SearchAPI />
        </div>
      </div>
    );
  }
}

/*class SearchBar extends React.Component {
  render() {
    return React.createElement("input", {
      className: "search__input",
      placeholder: "Search Location"
    });
  }
}*/

/*class WeatherTab extends React.Component {
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
}*/

/* Bar for advanced weather information */
class WeatherInfoBar extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "time" },
      React.createElement("h3", { className: "timestamp" }, "Time"),
      React.createElement("h3", {}, "Humidity"),
      React.createElement("h3", {}, "Wind"),
      React.createElement("h3", {}, "Clouds"),

      React.createElement("p", { className: "timestamp" }, ""),
      React.createElement("p", { className: "humidity" }, ""),
      React.createElement("p", { className: "wind" }, ""),
      React.createElement("p", { className: "clouds" }, "")
    );
  }
}

/*class MotivationBar extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "motivation" },
      React.createElement("h2", { className: "moti_title" }, "Motivation"),
      React.createElement(
        "p",
        { className: "moti_desc" },
        '"' +
          "Education is the passport to the future for tomorrow belongs to those who prepare for it today" +
          '"'
      )
    );
  }
}*/

/* component for holding quotes/refresh button */
class MotivationBar extends React.Component {
  render() {
    return (
      <div className="motivation">
        <Quotes />
      </div>
    );
  }
}

/* showing an outfit image on refresh */
class ProductBar extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "clothes" },
      <OutfitURL />,
      <OutfitSelect />
    );
  }
}

/*class ScheduleBar extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "schedule" },
      React.createElement("h2", { className: "schedule_title" }, "Schedule"),
      React.createElement(
        "p",
        { className: "schedule_desc" },
        "You have no set lessons today."
      ),
      <StudentSessions />
    );
  }
}*/

/* Timer */
class TimerBar extends React.Component {
  render() {
    return React.createElement("div", { className: "Timer" }, <Timer />);
  }
}

/* schedule and task list */
class ScheduleBar extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "scheduleee" },
      <StudentSessions />,
      <Reload />
    );
  }
}

/* Rendering */
class Navigation extends React.Component {
  renderNavigation(i) {
    return React.createElement(Nav, null);
  }
  render() {
    return this.renderNavigation(0);
  }
}

class EntryCtd extends React.Component {
  renderEntry(i) {
    return React.createElement(Entry, null);
  }
  render() {
    return this.renderEntry(0);
  }
}

/*class Search extends React.Component {
  renderSearchBar(i) {
    return React.createElement(SearchBar, null);
  }
  render() {
    return React.createElement(
      "div",
      { className: "search" },
      this.renderSearchBar(0)
    );
  }
}*/

/*class Weather extends React.Component {
  renderWeatherTab(i) {
    return React.createElement(WeatherTab, null);
  }
  render() {
    return this.renderWeatherTab(0);
  }
}*/

class ForecastInfo extends React.Component {
  renderFI(i) {
    return React.createElement(ForecastToggle, null);
  }
  render() {
    return this.renderFI(0);
  }
}

class WeatherBarCtd extends React.Component {
  renderTime(i) {
    return React.createElement(WeatherInfoBar, null);
  }
  render() {
    return this.renderTime(0);
  }
}

class Motivation extends React.Component {
  renderMotivationBar(i) {
    return React.createElement(MotivationBar, null);
  }
  render() {
    return this.renderMotivationBar(0);
  }
}

class ProductCtd extends React.Component {
  renderProductBar(i) {
    return React.createElement(ProductBar, null);
  }
  render() {
    return this.renderProductBar(0);
  }
}

class TimeStudent extends React.Component {
  renderScheduleBar(i) {
    return React.createElement(TimerBar, null);
  }
  render() {
    return this.renderScheduleBar(0);
  }
}

class ScheduleList extends React.Component {
  renderScheduleBar(i) {
    return React.createElement(ScheduleBar, null);
  }
  render() {
    return this.renderScheduleBar(0);
  }
}

class Main extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "header" },
      React.createElement(
        "div",
        { className: "weather" },
        React.createElement(Navigation, null)
      ),
      React.createElement(
        "div",
        { className: "entry_ctd" },
        React.createElement(EntryCtd, null)
      ),
      /*      React.createElement(
        "div",
        { className: "nav" },
        React.createElement(Search, null)
      ),*/
      /*      React.createElement(
        "div",
        { className: "weath" },
        React.createElement(Weather, null)
      ),*/
      React.createElement(
        "div",
        { className: "forecast-results" },
        React.createElement(ForecastInfo, null)
      ),
      React.createElement(
        "div",
        { className: "time" },
        React.createElement(WeatherBarCtd, null)
      ),
      React.createElement(
        "div",
        { className: "motivation" },
        React.createElement(Motivation, null)
      ),
      React.createElement(
        "div",
        { className: "menu" },
        React.createElement(ProductCtd, null)
      ),
      React.createElement(
        "div",
        { className: "Timer" },
        React.createElement(TimeStudent, null)
      ),
      React.createElement(
        "div",
        { className: "schedule" },
        React.createElement(ScheduleList, null)
      ),
      React.createElement(
        "div",
        { className: "game-info" },
        React.createElement("div", null),
        React.createElement("ol", null)
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById("main")
);
