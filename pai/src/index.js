import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Pai from './pages/Pai';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/pai' element={<Pai/>}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


