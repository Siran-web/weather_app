import { useState } from "react";
import { useWeather } from "../context/weatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function WeatherApp() {
  const [city, setCity] = useState("");
  const { weatherData, search, isLoading } = useWeather();

  const handleSearch = () => {
    if (city) {
      search(city);
    } else {
      console.error("Enter a valid city name");
    }
  };

  return (
    <div className="my-[150px] mx-4 text-[18px] text-white ">
      <div className="flex">
        <input
          className="bg-black opacity-70 h-7 mr-2 px-2 w-full border-b-2 border-neutral-50 focus:outline-none focus:ring-0"
          type="text"
          placeholder="Enter the city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch} className="h-4 rounded-e-sm">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {weatherData && !isLoading && (
        <>
          <div className="flex justify-center items-center border-b-2">
            <p className="items-center my-3">
              {weatherData.name}, {weatherData.sys.country}
            </p>
            <img
              className="temp"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            />
          </div>
          <div className="my-2 py-1 items-center flex justify-center border-b-2 border-neutral-500">
            Temperature : {Math.round(weatherData.main.temp)-273}{" "}°c
          </div>
          <div className="my-2 py-1 items-center flex justify-center border-b-2 border-neutral-500">
            Visibility : {Math.round(weatherData.visibility)}{" "}mi
          </div>
          <div className="my-2 py-1 items-center flex justify-center border-b-2 border-neutral-500">
            Humidity : {weatherData.coord.lon}{" "}%
          </div>
          <div className="my-2 py-1 items-center flex justify-center border-b-2 border-neutral-500">
            Wind Speed : {Math.round(weatherData.wind.speed)}{" "}Km/h
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherApp;
