import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/App';
import Contato from './pages/Contato';
import Tarefa from './pages/Tarefa';
import Media from './pages/Media';
import Correio from './pages/Correio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}/>
      <Route path='/contato' element = {<Contato/>}/>
      <Route path='/tarefa' element = {<Tarefa/>}/>
      <Route path='/media' element = {<Media/>}/>
      <Route path='/correio' element = {<Correio/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
 
