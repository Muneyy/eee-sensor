import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Navbar from './Navbar';
import About from './Pages/About';
import Documentation from './Pages/Documentation';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='flex flex-col w-full justify-center items-center gap-5 pt-10'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/About' element={<About />} />
          <Route path='/Documentation' element={<Documentation/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);