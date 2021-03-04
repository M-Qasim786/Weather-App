import React, { useState } from "react";

const api = {
  key: "cae0544a8db94d24384257a7c107090f",
  base: "http://api.openweathermap.org/data/2.5/",
};
const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Juuly",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="app">
      <main>
        <div className="search_box">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            className="search_bar"
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
       <div>
          <div className="location_box">
          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather_box">
          <div className="temp">
            {weather.main.temp}°C
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
       </div>
         ) : ('')}
      </main>
    </div>
  );
};

export default App;
