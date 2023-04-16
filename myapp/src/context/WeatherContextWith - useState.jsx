import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// create a context
let WeatherContext = createContext({});

// set a context provider ==> we set all the function & variable
// provider is component
// in provider we pass all child element i.e children

export let WeatherContextProvider = (props) => {
  let { children } = props;

  let [city, setCity] = useState("mumbai");
  let [weatherDetails, setWeatherDetails] = useState(null);

  let getCityDetails = async () => {
    try {
      const API_key = "338d7049189196fba6402362a0f256f2";
      let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`;
      let { data } = await axios.get(url);
      setWeatherDetails(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getCityDetails();
  }, []);

  let values = {
    city,
    setCity,
    getCityDetails,
    weatherDetails,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

// use that context
// own hook ==> custom hook
export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

// custom hooks are used for reusability of the code
// here "useWeatherContext" is a custom hook
