import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import MyContextData from '@/interfaces/MyContextData.interface';
import Context from '@/context';
import Provider from '@/context/Provider';
// import { AppContext } from 'next/app';

const renderWithContext = (component: ReactNode) => {
  return (
    render(
      <Provider>{ component }</Provider>
    )
  )
}

export default renderWithContext;
