import { ReactNode, useState, useMemo, useCallback } from "react";
import { AppContext } from ".";
import MyContextData from "@/interfaces/MyContextData.interface";

interface IProps {
  children: ReactNode
}

export const AppContextProvider = ({ children }: IProps) => {

  const [location, setlocation] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState([]);

  const context: MyContextData = {
    location,
    forecast,
    current,
    setlocation,
    setForecast,
    setCurrent
  };

  return <AppContext.Provider value={context}>
    {children}
  </AppContext.Provider>
}