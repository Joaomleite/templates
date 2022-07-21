import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

export const ROUTES_PATH = {
  home: { route: '/', use: '/' },
};

export const ROUTES = [
  {
    path: ROUTES_PATH.home.route,
    isPublic: true,
    element: <Home />,
  },
];

export default function ApplicationRoutes() {
  function getRoutes() {
    let rt = ROUTES.map((r, i) => {
      if (r.isPublic) {
        return <Route key={i} {...r} />;
      } else {
        return null;
      }
    });
    return rt;
  }

  return <Routes>{getRoutes()}</Routes>;
}
