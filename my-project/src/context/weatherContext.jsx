import { createContext, useContext } from "react";

export const WeatherContext = createContext({
    weatherData: null,
    search: () => {},
    isLoading: false,
});

export const useWeather = () => {
    return useContext(WeatherContext); 
};

export const WeatherProvider = WeatherContext.Provider;