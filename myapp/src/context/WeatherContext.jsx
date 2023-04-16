import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

// create a context
let WeatherContext = createContext({});

// reducer => function (state , action)
let initialState = {
  city: "mumbai",
  weatherDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DETAILS":
      return { ...state, weatherDetails: action.payload };

    case "SET_CITY":
      return { ...state, city: action.payload };

    default:
      return state;
  }
};

export let WeatherContextProvider = (props) => {
  let { children } = props;
  let [state, dispatch] = useReducer(reducer, { ...initialState });

  let getCityDetails = async () => {
    try {
      const API_key = "338d7049189196fba6402362a0f256f2";
      let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${state.city}&appid=${API_key}`;
      let { data } = await axios.get(url);
      dispatch({ type: "SAVE_DETAILS", payload: data });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getCityDetails();
  }, []);

  let values = {
    city: state.city,
    weatherDetails: state.weatherDetails,
    dispatch,
    getCityDetails,
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
