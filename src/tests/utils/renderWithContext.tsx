import AppContextProvider from "@/context/Provider";
import { render } from '@testing-library/react';
import { ReactElement } from "react";



const renderWithContext = (component: ReactElement) => {
  return {
    ...render(
      <AppContextProvider>
        {component}
      </AppContextProvider>)
  }
}

export default renderWithContext;