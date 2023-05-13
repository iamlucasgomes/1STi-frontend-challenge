import { ReactNode, useState, useMemo, useCallback } from "react";
import { AppContext } from ".";
import MyContextData from "@/interfaces/MyContextData.interface";
import currentMock from "@/tests/mocks/current.mock";
import forecastMock from "@/tests/mocks/forecast.mock";
import locationMock from "@/tests/mocks/location.mock";

interface IProps {
  children: ReactNode
}

export const AppContextProvider = ({ children }: IProps) => {

  const [location, setLocation] = useState(locationMock);
  const [forecast, setForecast] = useState(forecastMock);
  const [current, setCurrent] = useState(currentMock);
  const [showCard, setShowCard] = useState(false);

  const context: MyContextData = {
    location,
    forecast,
    current,
    showCard,
    setLocation,
    setForecast,
    setCurrent,
    setShowCard
  };

  return <AppContext.Provider value={context}>
    {children}
  </AppContext.Provider>
}