import React from 'react';
import * as Mui from '@mui/material/styles';
import { ApplicationProvider } from './context/ApplicationContext';

export type ProvidersProps = {
  children: React.ReactNode;
  muiTheme: Mui.Theme;
};

export default function Providers({  children, muiTheme }: ProvidersProps) {
  return (
    <ApplicationProvider>
        <Mui.ThemeProvider theme={muiTheme}>
           {children}
        </Mui.ThemeProvider>
    </ApplicationProvider>
  );
}
