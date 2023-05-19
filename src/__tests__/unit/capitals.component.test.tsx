// import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import React from 'react'
import axios from 'axios'
// import Capitals from '@/components/Capitals.component'
import CapitalsWeatherMock from '@/mocks/capitalsWeather.mock'
// import renderWithContext from '../../helpers/renderWithContext'
// import { act } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter';
// import capitals from '@/mocks/capitals.mock'

describe('Capitals component tests', () => {

  const mock = new MockAdapter(axios);

  CapitalsWeatherMock.map(capital => {
    test(`should return mocked data for ${capital.name}`, async () => {
      mock.onGet(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${capital.name}&days=1&aqi=no&alerts=no`).reply(200, { data: capital });
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${capital.name}&days=1&aqi=no&alerts=no`);

      expect(response.status).toBe(200);
      expect(response.data).toEqual({ data: capital });
    });

    // it.only('renders a table', async () => {
    //   await act(async () => {
    //     renderWithContext(<Capitals />);
    //   });
    //   const row = screen.getByRole('row', {
    //     name: /18° 25° rio de janeiro/i
    //   });
    //   expect(row).toBeInTheDocument();
    // });
  });
})