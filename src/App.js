// import { Typography, Box, Avatar } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
// import { Forecast } from "./components/Forecast/Forecast";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // const [unit, setUnit] = useState("metric");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=3a8b257b236f6fef2f1f816aa1286aa5`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      // sets to empty string after entering location
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Location"
          maxLength="50"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
