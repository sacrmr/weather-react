import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Vienna",
    temperature: "8",
    icon: "http://openweathermap.org/img/wn/01d.png",
    realfeel: "7",
    wind: "5",
    humidity: "90",
    date: "25.11.2022",
    time: "10:00",
  };

  return (
    <div className="Weather">
      <ul className="main-info">
        <li>
          <h1 id="city">{weatherData.city}</h1>
          <h2 id="temperature">{weatherData.temperature}</h2>
          <span className="units">
            <span id="celsius" className="active">
              °C
            </span>{" "}
            |<span id="fahrenheit">°F</span>
          </span>
        </li>
        <span className="vertical-line"></span>
        <li className="second-info">
          <img src={weatherData.icon} id="icon-primary" alt="weathericon" />

          <br />
          <div id="condition">Clear</div>
        </li>
        <br />
        <li className="conditions">
          Feels like: <span id="realfeel">{weatherData.realfeel}</span>°<br />
          Wind: <span id="wind">{weatherData.wind}</span> km/h
          <br />
          Humidity: <span id="humidity">{weatherData.humidity}</span>%
        </li>
      </ul>
      <a
        className="info-link"
        href="https://openweathermap.org/"
        target="_blank"
        rel="noreferrer"
      >
        More Info
      </a>
      <span className="updated"> Last updated: {weatherData.time},</span>
      <span id="date"> {weatherData.date}</span>
    </div>
  );
}
