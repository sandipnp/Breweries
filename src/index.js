import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { CardDetail } from './CardDetail';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<CardDetail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


