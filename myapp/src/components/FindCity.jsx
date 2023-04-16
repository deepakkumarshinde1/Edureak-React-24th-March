import { useWeatherContext } from "../context/WeatherContext";

const FindCity = () => {
  let { city, dispatch, getCityDetails } = useWeatherContext();
  return (
    <div className="mb-2 input-group">
      <span htmlFor="" className="input-group-text">
        City
      </span>
      <input
        type="text"
        placeholder="Enter City Name"
        className="form-control"
        value={city}
        onChange={(event) =>
          dispatch({ type: "SET_CITY", payload: event.target.value })
        }
      />
      <button className="btn btn-success " onClick={getCityDetails}>
        Search
      </button>
    </div>
  );
};

export default FindCity;
