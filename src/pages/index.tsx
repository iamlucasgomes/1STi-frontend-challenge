import Input from '@/components/Input.component'
import Title from '../components/Title.component'
// import getWeatherForecastApi from '@/services/getWeatherForecastApi'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-20`}>
      <section>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-20">
          <Title title="Previsão do Tempo" />
        </div>
      </section>
      <section>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Input />
        </div>

      </section>

    </main>
  )
}
