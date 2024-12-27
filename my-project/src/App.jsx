import { useState, useEffect } from "react";
import bgImg from "./assest/Tree.jpg";
import sunnyDay from "./assest/sunnyDay.jpg";
import { WeatherProvider, useWeather } from "./context/weatherContext";
import Weather from "./component/weather";

function App() {
  const [time, setTime] = useState(new Date());
  const { weatherData, search, isLoading } = useWeather();
  const [location, setLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const fetchLocation = async() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  };
  const fetchCity = async()=>{
    if(!location) return;
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=30393c76d74f1292451db3400abe10e6`;
        const response = await fetch(url);
        if(!response.ok){
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setLocationData(data);
        console.log(data);
    }
    catch(e){
        console.log("Error in fetching city",e);
    }
  }
  useEffect(()=>{
    fetchLocation();
  },[])
  useEffect(()=>{
    if(location){
      fetchCity();
    }
  },[location]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    search("London");
  }, [search]);

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Side */}
      <div
        className="relative w-[40%] bg-gray-800 h-[600px] rounded-s-xl"
        style={{
          backgroundImage: `url(${sunnyDay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-8 my-4 absolute right-0 text-white text-[40px] flex">
          {locationData
            ? `${locationData.name}`
            :'loading...'}
          {locationData ? <img src={`https://openweathermap.org/img/wn/${locationData.weather[0].icon}.png`}/>
          :" "}
        </div>
        <div className="my-12 mx-8 absolute bottom-0 left-0 text-white text-[25px]">
          {time.toLocaleTimeString()}
        </div>
        <div className="mx-8 my-6 absolute bottom-0 left-0 text-white text-[15px]">
          {time.toLocaleDateString()}
        </div>
        <div className="mx-8 my-6 absolute bottom-0 right-0 text-white text-[40px]">
          {locationData
            ? `${Math.round(locationData.main.temp - 273.15)}°C`
            : "--°C"}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[25%] bg-black opacity-70 rounded-e-xl h-[600px] flex justify-center ">
        <WeatherProvider value={{ weatherData, search, isLoading }}>
          <Weather />
        </WeatherProvider>
      </div>
    </div>
  );
}

export default App;
