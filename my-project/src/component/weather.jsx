import { useState } from "react";
import { WeatherProvider } from "../context/weatherContext";
import WeatherApp from "./weatherApp";
// const API_KEY = import.meta.env.VITE_API_KEY;

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const search = async (city) => {
        try {
            console.log("Sim");
            setIsLoading(true);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30393c76d74f1292451db3400abe10e6`;
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.log(error, "Error fetching data");
        } finally {
            setIsLoading(false);
        }
    };

    const value = { weatherData, search, isLoading };

    return (
        <WeatherProvider value={value}>
            <WeatherApp />
        </WeatherProvider>
    );
}

export default Weather;
