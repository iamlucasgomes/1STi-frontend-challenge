import { useAppContext } from "@/hooks/useAppContext.hook"
import getWeatherForecastApi from "@/services/getWeatherForecastApi"
import { ChangeEvent, useCallback, useState } from "react"

export default function Input() {
  const [inputValue, setInputValue] = useState('')
  const { setShowCard } = useAppContext();

  const handleInputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }, [])

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === 'Enter') {
      // await getWeatherForecastApi(inputValue).then((response) => {
      // setLocation(response.data);
      // });

      setInputValue('');
      setShowCard(true);

    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input id="default-search" className="block w-96 p-4 pl-10 text-sm" placeholder="Insira aqui o nome da cidade." onChange={(e) => handleInputValue(e)} value={inputValue} onKeyDown={handleKeyDown} />
    </div>

  )
}