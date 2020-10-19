import React, { useEffect, useState } from "react";

export default function Weather() {
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log("position: ", position);
  //       pos = position;
  //     });
  //   }
  // }

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function getWeatherForecast(lat, lon) {
    const apiKey = "dd4722a6358546e2f5200a1873c4911f";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => {
          setData(data);
          console.log("data: ", data);
        },
        (error) => {
          setError(error);
          console.log("error: ", error);
        }
      );
  }

  useEffect(() => {
    console.log("Weather did mounted");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeatherForecast(lat, lon);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="weather-card">
      <h2>Weather</h2>
      {error ? (
        <h1 style={{ color: "red" }}>"Error!!!"</h1>
      ) : (
        <pre
          style={{
            textAlign: "left",
            width: "max-content",
            margin: "0 auto",
          }}
        >
          {!data ? "Loading..." : JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
