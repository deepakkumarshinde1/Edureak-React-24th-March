import { useEffect, useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  let [city, setCity] = useState("mumbai");

  let getCityDetails = async () => {
    try {
      const API_key = "338d7049189196fba6402362a0f256f2";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
      let { data } = await axios.get(url);
      console.log(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getCityDetails();
  }, []);
  return (
    <>
      <section className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-11 col-lg-4  card p-3">
            <div className="mb-2 input-group">
              <span htmlFor="" className="input-group-text">
                City
              </span>
              <input
                type="text"
                placeholder="Enter City Name"
                className="form-control"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <button className="btn btn-success " onClick={getCityDetails}>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
