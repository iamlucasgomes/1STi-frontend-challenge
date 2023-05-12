import { useAppContext } from "@/hooks/useAppContext.hook";

export default function WeatherCard() {
  const { weatherForecasts } = useAppContext();
  console.log(weatherForecasts);
  return <h1>WeatherCard</h1>;
}