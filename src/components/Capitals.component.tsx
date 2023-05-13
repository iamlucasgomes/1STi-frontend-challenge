import CapitalsWeather from "@/interfaces/CapitalsWeather.interface";
import getWeatherForecastApi from "@/services/getWeatherForecastApi";
import CapitalsWeatherMock from "@/tests/mocks/capitalsWeather.mock";

import { useEffect, useState } from "react"

export default function Capitals() {
    const capitals = [
        "Rio de Janeiro",
        "São Paulo",
        "Belo Horizonte",
        "Brasilia",
        "Belém",
        "Salvador",
        "Curitiba",
        "Fortaleza",
        "Manaus",
        "Joao Pessoa"
    ];
    const [weatherData, setWeatherData] = useState<CapitalsWeather[]>([]);
    useEffect(() => {
        async function fetchWeatherData() {
            const promises = capitals.map(capital =>
                getWeatherForecastApi(capital)
                    .then(response => {
                        if (!response) {
                            throw new Error('City not found');
                        }
                        return response;
                    })
                    .then(data => ({
                        name: data.location.name,
                        maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
                        minTemp: data.forecast.forecastday[0].day.mintemp_c,
                    }))
                    .catch(error => {
                        console.error(error);
                        return null;
                    }))
            const weatherDataList = await Promise.all(promises);
            const capitalsWeather: CapitalsWeather[] = []
            // console.log(weatherDataList)
            for (const city of weatherDataList) {
                if(city !== null)
                capitalsWeather.push(city)
            }

            setWeatherData(capitalsWeather);
        }
        // console.log(capitalsWeather)
        fetchWeatherData()
    }, [capitals])
    return (
        <section>
            <div className="mt-3 border-t border-white">
                <h1 className="text-3xl text-start text-white arial">Capitais</h1>
            </div>
            <div className="grid grid-cols-2">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="text-dark-gray-900 open-sans-light text-s text-left p-1">Min</th>
                            <th className="text-dark-gray-900 open-sans-light text-s text-left p-1">Máx</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.slice(0, 5).map(({ name, maxTemp, minTemp }) => (
                            <tr key={name}>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${Math.floor(minTemp)}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${Math.floor(maxTemp)}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1 ">{name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="text-dark-gray-900 open-sans-light text-s text-left p-1">Min</th>
                            <th className="text-dark-gray-900 open-sans-light text-s text-left p-1">Máx</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weatherData.slice(5, 10).map(({ name, maxTemp, minTemp }) => (
                            <tr key={name}>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${Math.floor(minTemp)}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${Math.floor(maxTemp)}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}