import React, { useState, createContext } from 'react';
import { PropChildrenType } from '../types';

export interface ApplicationContextData {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ApplicationContext = createContext<ApplicationContextData>({} as ApplicationContextData);

export const ApplicationProvider = ({ children }: PropChildrenType) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  return <ApplicationContext.Provider value={{ menuState, setMenuState }}>{children}</ApplicationContext.Provider>;
};
