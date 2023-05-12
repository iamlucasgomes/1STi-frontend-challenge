import React from "react";

export default interface MyContextData {
  location: Array<unknown>;
  setLocation: React.Dispatch<React.SetStateAction<Array<unknown>>>;
  forecast: Array<unknown>;
  setForecast: React.Dispatch<React.SetStateAction<Array<unknown>>>;
  current: Array<unknown>;
  setCurrent: React.Dispatch<React.SetStateAction<Array<unknown>>>;
}