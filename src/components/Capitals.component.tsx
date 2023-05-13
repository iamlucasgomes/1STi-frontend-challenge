import CapitalsWeather from "@/interfaces/CapitalsWeather.interface";
import getWeatherForecastApi from "@/services/getWeatherForecastApi";
import CapitalsWeatherMock from "@/tests/mocks/capitalsWeather.mock";
import { get } from "http";
import { useState } from "react"

export default function Capitals() {
    const capitals = [
        "Rio de Janeiro",
        "São Paulo",
        "Belo Horizonte",
        "Brasília",
        "Belém",
        "Salvador",
        "Curitiba",
        "Fortaleza",
        "Manaus",
        "João Pessoa"
    ];

    const capitalsWeather: CapitalsWeather[] = [];

    // for (const capital in capitals) {
    //     getWeatherForecastApi(capital).then((response) => {
    //         capitalsWeather.push({
    //             name: response.location.name,
    //             maxTemp: response.forecast.forecastday[0].day.maxtemp_c,
    //             minTemp: response.forecast.forecastday[0].day.mintemp_c,
    //         });
    //     })
    // }



    // }
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
                        {CapitalsWeatherMock.slice(0, 5).map((capital) => (
                            <tr key={capital.name}>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${capital.minTemp}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${capital.maxTemp}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1 ">{capital.name}</td>
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
                        {CapitalsWeatherMock.slice(5, 10).map((capital) => (
                            <tr key={capital.name}>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${capital.minTemp}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{`${capital.maxTemp}°`}</td>
                                <td className="text-dark-gray-900 open-sans-bold text-xs text-left p-1">{capital.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}