import axios, { AxiosResponse } from "axios";

export default async function getWeatherForecastApi(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const data = axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=yes`)
  const returnData = await data.then((res: AxiosResponse) => res.data);
  return returnData
}