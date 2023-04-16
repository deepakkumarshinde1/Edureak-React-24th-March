import { useEffect, useState } from "react";
import axios from "axios";
import FindCity from "./FindCity";
import CityWeatherDetails from "./CityWeatherDetails";

const WeatherApp = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="row justify-content-center mt-4">
          <div className="col-11 col-lg-4  card p-3">
            <FindCity />

            <CityWeatherDetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default WeatherApp;
