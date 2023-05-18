import React, { createContext } from 'react';
import MyContextData from '@/interfaces/MyContextData.interface';

const AppContext = createContext<MyContextData>({} as MyContextData);

export default AppContext;