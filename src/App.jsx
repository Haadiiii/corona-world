import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Corona from './components/Corona';
import Details from './components/Details';
import store from './Redux/ConfigStore/store';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Corona />} />
      <Route path="/Details/:country" element={<Details />} />
    </Routes>
  </Provider>
);

export default App;
