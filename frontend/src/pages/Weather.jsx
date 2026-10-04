import "./Weather.css";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import { useState } from "react";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please Enter a City Name");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const response = await axios.post("http://localhost:8008/api/weather", {
        city: city,
      });
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
      setError(err.response.data.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  


  const getWeatherClass = (description) => {
    if (description.includes("clear")) {
      return "clear";
    }

    if (description.includes("cloud")) {
      return "cloudy";
    }

    if (description.includes("rain")) {
      return "rainy";
    }

    if (description.includes("storm")) {
      return "storm";
    }

    if (description.includes("snow")) {
      return "snowy";
    }

    return "default";
  };
  return (
    <div
      className={`weather-page ${weather ? getWeatherClass(weather.description) : ""}`}
    >
      <div className="weather-container">
        <h1>🌤 Weather App</h1>

        <p className="subtitle">Check the weather of your city</p>

       <SearchBox
    city={city}
    setCity={setCity}
    getWeather={getWeather}
    loading={loading}
    setError={setError}
/>
        {error && <p className="error-message">{error}</p>}

        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Weather;
