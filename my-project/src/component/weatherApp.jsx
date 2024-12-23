import { useState } from "react";
import { useWeather } from "../context/weatherContext";

function WeatherApp() {

    const { search, isLoading, weatherData } = useWeather();
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (city) {
            search(city);
            console.log(city);
        } else {
            console.error("Enter a valid city name");
        }
    };

    return (
        <div>
            <div className="flex">
            <input
                className=" bg-black opacity-70 h-4 w-full text-white border-b-2 border-neutral-50"
                type="text"
                placeholder="Enter the city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button 
                onClick={handleSearch}
                className="h-4 rounded-e-sm text-white"
            >Search</button>
            </div>
            {isLoading && <p>Loading....</p>}
            {weatherData && !isLoading && (
                <div>
                    <h3>{weatherData.name}</h3>
                    {console.log(weatherData.name)}
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
