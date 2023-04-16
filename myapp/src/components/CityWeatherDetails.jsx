import { useWeatherContext } from "../context/WeatherContext";

const CityWeatherDetails = () => {
  let { weatherDetails } = useWeatherContext();
  return (
    <>
      {weatherDetails ? (
        <div>
          <p className="h1">
            {weatherDetails.name}
            <small className="mx-3">
              {weatherDetails.main.temp}
              <span
                className="position-relative"
                style={{ top: "-10px", fontSize: "18px" }}
              >
                o
              </span>
              C
            </small>
          </p>
        </div>
      ) : null}
    </>
  );
};

export default CityWeatherDetails;
