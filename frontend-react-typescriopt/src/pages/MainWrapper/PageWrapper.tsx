import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../common/components/Header/Header';
import Menu from '../../common/components/Menu/Menu';

export type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Router>
      <Header></Header>
      <Menu />
      {children}
    </Router>
  );
}
