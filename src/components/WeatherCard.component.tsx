import { useAppContext } from "@/hooks/useAppContext.hook";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function WeatherCard() {
  const { location, current, forecast, setShowCard } = useAppContext();
  const forecastDay = forecast.forecastday.at(0);
  const dayOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  return (
    // <section>
    //   <div className="bg-white p-7">
    //     <button onClick={() => setShowCard(false)}>x</button>
    //     <h1>{`${location.name}, ${location.region} - ${location.country}`}</h1>
    //     <p>{`${current.temp_c}°C ${current.condition.text}`}</p>
    //     <div>
    //       <p>{`${Math.floor(Number(forecastDay?.day.mintemp_c))}°C`}</p>
    //       <p>{`${Math.floor(Number(forecastDay?.day.maxtemp_c))}°C`}</p>
    //       <p>{`Sensação ${Math.floor(Number(current.feelslike_c))}°C`}</p>
    //       <p>{`Vento ${Math.floor(current.wind_kph)}km/h`}</p>
    //       <p>{`Umidade ${current.humidity}%`}</p>
    //       <table>
    //         <thead>
    //           {forecast.forecastday.slice(0, 5).map((day) => {
    //             const myDate = new Date(day.date);
    //             return <td className="p-1">{dayOfTheWeek[myDate.getDay()]}</td>
    //           })}
    //         </thead>
    //         <tbody>
    //           {forecast.forecastday.slice(0, 5).map((day) => {
    //             return <td className="p-1">{`${Math.floor(day.day.mintemp_c)} ${Math.floor(day.day.maxtemp_c)}`}</td>
    //           })}
    //         </tbody>
    //       </table>
    //     </div>

    //   </div>
    // </section>
    // <section className="bg-white p-5 relative">
    //   <div className="absolute top-0 right-0">
    //     <button onClick={() => setShowCard(false)} className="text-2xl font-bold">&times;</button>
    //   </div>
    //   <h1 className="text-2xl font-bold">{`${location.name}, ${location.region} - ${location.country}`}</h1>
    //   <p className="text-xl">{`${Math.floor(Number(current.temp_c))}°C ${current.condition.text}`}</p>
    //   <div className="grid grid-cols-5 gap-4 mt-6">
    //     <div>
    //       <p className="text-gray-500 font-semibold">Low</p>
    //       <p className="text-xl font-semibold">{`${Math.floor(Number(forecastDay?.day.mintemp_c))}°C`}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-500 font-semibold">High</p>
    //       <p className="text-xl font-semibold">{`${Math.floor(Number(forecastDay?.day.maxtemp_c))}°C`}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-500 font-semibold">Feels Like</p>
    //       <p className="text-xl font-semibold">{`Sensação ${Math.floor(Number(current.feelslike_c))}°C`}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-500 font-semibold">Wind</p>
    //       <p className="text-xl font-semibold">{`Vento ${Math.floor(current.wind_kph)}km/h`}</p>
    //     </div>
    //     <div>
    //       <p className="text-gray-500 font-semibold">Humidity</p>
    //       <p className="text-xl font-semibold">{`Umidade ${current.humidity}%`}</p>
    //     </div>
    //   </div>
    //   <div className="mt-6">
    //     <table className="w-full">
    //       <thead>
    //         <tr>
    //           {forecast.forecastday.slice(0, 5).map((day) => {
    //             const myDate = new Date(day.date);
    //             return <th className="p-1">{dayOfTheWeek[myDate.getDay()]}</th>
    //           })}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           {forecast.forecastday.slice(0, 5).map((day) => {
    //             return <td className="p-1">{`${Math.floor(day.day.mintemp_c)} ${Math.floor(day.day.maxtemp_c)}`}</td>
    //           })}
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </section>
    <section>
      <div className="bg-white p-7 relative">
        <div className="absolute top-0 right-1 p-2">
        <FontAwesomeIcon className="text-orange text-2xl font-twin" icon={faXmark} onClick={() => setShowCard(false)} />
        </div>
        <h1>{`${location.name}, ${location.region} - ${location.country}`}</h1>
        <p className="text-3xl arial-bold text-dark-gray-700">{`${Math.round(current.temp_c)}°C ${current.condition.text}`}</p>
        <div>
          <p>
            <FontAwesomeIcon className="text-orange" icon={faArrowDown} />
            {` ${Math.floor(Number(forecastDay?.day.mintemp_c))}°`}
          </p>
          <p>
            <FontAwesomeIcon className="text-orange" icon={faArrowUp} />
            {` ${Math.floor(Number(forecastDay?.day.maxtemp_c))}°`}
          </p>
          <p>{`Sensação ${Math.floor(Number(current.feelslike_c))}°C`}</p>
          <p>{`Vento ${Math.floor(current.wind_kph)}km/h`}</p>
          <p>{`Umidade ${current.humidity}%`}</p>
          <table className="mt-3 border-t border-orange">
            <thead>
              {forecast.forecastday.slice(0, 5).map((day) => {
                const myDate = new Date(day.date);
                return (
                  <td className="p-1 text-gray-700 arial-bold text-sm">{dayOfTheWeek[myDate.getDay()]}</td>
                );
              })}
            </thead>
            <tbody>
              {forecast.forecastday.slice(0, 5).map((day) => {
                return (
                  <td className="p-1 text-orange arial-bold text-xs">{`${Math.floor(day.day.mintemp_c)}° ${Math.floor(day.day.maxtemp_c)
                    }°`}</td>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  )
}