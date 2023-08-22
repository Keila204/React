import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Imdb from './pages/imdb'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Imdb />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


