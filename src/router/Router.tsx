import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from '../components/pages/MainPage';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
