import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Neflix from './pages/netflix';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Neflix/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


