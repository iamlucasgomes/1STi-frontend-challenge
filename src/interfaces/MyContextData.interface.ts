import React from "react";

export default interface MyContextData {
  weatherForecasts: Array<unknown>;
  setWeatherForecasts: React.Dispatch<React.SetStateAction<never[]>>;
}