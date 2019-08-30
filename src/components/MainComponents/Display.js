import React from 'react';

const Display = ({ city, temperature, description, sunrise, sunset, tempMin, tempMax, pressure, humidyty, visibility, wind }) => {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <div className="display">
      <p className="display__temperature">{temperature}&#176;C</p>
      <p className="display__city">{city}</p>
      <p className="display__description">{description}</p>
      <p className="display__data">Sunrise: {sunriseTime.substr(0, 5)}</p>
      <p className="display__data">Sunset: {sunsetTime.substr(0, 5)}</p>
      <p className="display__data">T min: {tempMin}&#176;C</p>
      <p className="display__data">T max: {tempMax}&#176;C</p>
      <p className="display__data">Press.: {pressure} hPa</p>
      <p className="display__data">Humidyty: {humidyty}%</p>
      <p className="display__data">Visibility: {visibility / 1000}km</p>
      <p className="display__data">Wind: {wind}m/s</p>
    </div>
  );
}

export default Display;