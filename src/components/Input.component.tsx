import { useAppContext } from "@/hooks/useAppContext.hook"
import getWeatherForecastApi from "@/services/getWeatherForecastApi"
import { ChangeEvent, useCallback, useState } from "react"

export default function Input() {
  const [inputValue, setInputValue] = useState('')
  const { setLocation } = useAppContext();

  const handleInputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }, [])

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === 'Enter') {
      await getWeatherForecastApi(inputValue).then((response) => {
        setLocation(response.data);
      });

      setInputValue('');
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <input type="text" placeholder="Insira aqui o nome da cidade" className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" onChange={(e) => handleInputValue(e)} value={inputValue} onKeyDown={handleKeyDown} />
    </div>
  )
}