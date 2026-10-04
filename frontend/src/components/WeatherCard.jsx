import EmptyState from "./EmptyState";
const getWeatherIcon = (description) => {
  if (description.includes("clear")) {
    return "☀️";
  }

  if (description.includes("cloud")) {
    return "☁️";
  }

  if (description.includes("rain")) {
    return "🌧️";
  }

  if (description.includes("storm")) {
    return "⛈️";
  }

  if (description.includes("snow")) {
    return "❄️";
  }

  return "🌤️";
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleString();
};

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <EmptyState />;
  }

  return (
    <div className="weather-card">
      <div className="location">
        <h2>{weather.city}</h2>

        <span>{weather.country}</span>
      </div>

      <div className="weather-time">{formatDate(weather.timestamp)}</div>

      <div className="weather-icon">{getWeatherIcon(weather.description)}</div>

      <div className="temperature">{Math.round(weather.temperature)}°C</div>

      <p className="description">{weather.description}</p>

      <div className="weather-details">
        <div className="detail">
          <span>💧</span>

          <p>Humidity</p>

          <strong>{weather.humidity}%</strong>
        </div>

        <div className="detail">
          <span>💨</span>

          <p>Wind Speed</p>

          <strong>{weather.windSpeed}m/s</strong>
        </div>

        <div className="detail">
          <span>🌡️</span>

          <p>Feels Like</p>

          <strong>{Math.round(weather.feelsLike)}°C</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
