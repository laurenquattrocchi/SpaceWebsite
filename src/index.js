import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Vocab from './pages/Vocab';
import Planets from './pages/Planets';
import PlanetInfo from './pages/PlanetInfo'
import POD from './pages/POD'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} exact />
      <Route path="/vocab" element={<Vocab/>} />
      <Route path="/planets" element={<Planets/>} />
      <Route path="/planetinfo" element={<PlanetInfo/>} />
      <Route path="/POD" element={<POD/>} />
    </Routes>
  </BrowserRouter>
);