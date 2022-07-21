import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import PageWrapper from './pages/MainWrapper/PageWrapper';
import Providers from './providers';
import ApplicationRoutes from './routes/routes';
import { MuiTheme } from './themes';

function App() {
  return (
    <Providers muiTheme={MuiTheme}>
    <PageWrapper>
      <ApplicationRoutes></ApplicationRoutes>
    </PageWrapper>
  </Providers>
  );
}

export default App;
