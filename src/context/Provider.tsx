import { ReactNode, useState, useMemo, useCallback } from "react";
import {  AppContext } from ".";
import MyContextData from "@/interfaces/MyContextData.interface";

interface IProps {
  children: ReactNode
}

export const AppContextProvider = ({ children }: IProps) => {

const [weatherForecasts, setWeatherForecasts] = useState([]);

  const context: MyContextData = {
    weatherForecasts,
    setWeatherForecasts
  };

  return <AppContext.Provider value={context}>
          {children}
         </AppContext.Provider>
}