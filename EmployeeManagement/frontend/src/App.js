import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage,SignupPage,SignupEPage } from './Routes.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route path="/signupe" element={<SignupEPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;







