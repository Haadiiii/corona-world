import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Corona from './components/Corona';
import Details from './components/Details';

const App = () => (
  <Routes>
    <Route path="/" element={<Corona />} />
    <Route path="/Details" element={<Details />} />
  </Routes>
);

export default App;
