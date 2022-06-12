import React, { useState } from "react";
import { Conditions } from "../Conditions/Conditions";
import { Card, CardContent, Typography } from "@mui/material";

export const Forecast = () => {
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [responseObj, setResponseObj] = useState({});
  const encodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "5ba90f9c4bmshc1fd919f6718cbdp18b798jsnfaaf37acb99f",
      },
    };

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedCity}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => console.error(err));
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{
            minWidth: 100,
          }}
        >
          Time to check the weather ☀️
        </Typography>
        {/* <h2>Time to check the weather ☀️</h2> */}
        <form onSubmit={getForecast}>
          <input
            type="text"
            placeholder="Enter City"
            maxLength="50"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
            />
            Celcius
          </label>
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "imperial"}
              value="imperial"
              onChange={(e) => setUnit(e.target.value)}
            />
            Fahrenheit
          </label>
          <button type="submit">Check the Forecast</button>
        </form>
        <Conditions responseObj={responseObj} />
      </CardContent>
    </Card>
  );
};
